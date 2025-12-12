import { FormlyFieldConfig } from '@ngx-formly/core';

export function AddFormConfigBuilder(obj: any): FormlyFieldConfig[] {
  if (!obj || typeof obj !== 'object') return [];

  const WHITELIST = new Set([
    'id',
    'title',
    'description',
    'category',
    'price',
    'discountPercentage',
    'rating',
    'stock',
    'tags',
    'brand',
    'sku',
    'weight',
    'dimensions',
    'availabilityStatus',
    'minimumOrderQuantity',
    'returnPolicy',
  ]);

  function toLabel(key: string) {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/[_-]/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase())
      .trim();
  }

  function buildObject(item: any): FormlyFieldConfig[] {
    const fields: FormlyFieldConfig[] = [];

    Object.keys(item).forEach((k) => {
      if (!WHITELIST.has(k)) {
        // skip non-core fields
        return;
      }
      const v = item[k];
      const label = toLabel(k);

      if (v === null) {
        fields.push({
          key: k,
          type: 'input',
          templateOptions: { label, placeholder: label },
        });
      } else if (typeof v === 'string') {
        const isLong = v.length > 80 || /description|comment|note/i.test(k);
        fields.push({
          key: k,
          type: isLong ? 'textarea' : 'input',
          templateOptions: {
            label,
            placeholder: label,
            rows: isLong ? 4 : undefined,
            required: k === 'title' || k === 'price', // quick sensible requireds
          },
        });
      } else if (typeof v === 'number') {
        fields.push({
          key: k,
          type: 'input',
          templateOptions: {
            label,
            placeholder: label,
            type: 'number',
            required: k === 'price' || k === 'id',
          },
        });
      } else if (typeof v === 'boolean') {
        fields.push({
          key: k,
          type: 'checkbox',
          templateOptions: { label },
        });
      } else if (Array.isArray(v)) {
        // array of primitives -> use textarea (newline separated) to avoid extra types
        if (v.length === 0 || typeof v[0] !== 'object') {
          fields.push({
            key: k,
            type: 'textarea',
            templateOptions: {
              label,
              placeholder: 'One item per line',
              rows: 3,
            },
            hooks: {
              onInit: (field) => {
                // if model has array, convert to newline text for the control display
                const current = field.formControl?.value;
                if (Array.isArray(current)) {
                  field.formControl?.setValue(current.join('\n'));
                }
              },
            },
          });
        } else {
          // array of objects (not expected in whitelist) — fallback to repeat if present
          fields.push({
            key: k,
            type: 'repeat',
            templateOptions: { label },
            fieldArray: {
              fieldGroup: buildObject(v[0]),
            } as any,
          } as any);
        }
      } else if (typeof v === 'object') {
        // nested object, like dimensions — render as grouped fields
        fields.push({
          key: k,
          wrappers: ['panel'],
          templateOptions: { label },
          fieldGroup: Object.keys(v).map((subKey) => {
            const subVal = v[subKey];
            const subLabel = toLabel(subKey);
            return {
              key: subKey,
              type: 'input',
              templateOptions: {
                label: subLabel,
                placeholder: subLabel,
                type: typeof subVal === 'number' ? 'number' : 'text',
              },
            } as FormlyFieldConfig;
          }),
        });
      } else {
        // fallback
        fields.push({
          key: k,
          type: 'input',
          templateOptions: { label, placeholder: label },
        });
      }
    });

    return fields;
  }

  return buildObject(obj);
}

export const AddFormConfig = AddFormConfigBuilder;
