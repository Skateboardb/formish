import React, { useCallback } from 'react';
import { types, TextInput, SelectInput } from '../inputs';

export default function Structure({ value, onChange }) {
  const handleChange = useCallback((name, value) => {
    console.log('Handle Change', name, value);
    onChange((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, [onChange]);

  const Sample = types.find(s => s.id === value.type);

  return (
    <tr>
      <td>
        <SelectInput name="type" value={value.type} onChange={handleChange} choices={types.map(t => t.id)} />
      </td>
      <td>
        <TextInput name="name" onChange={handleChange} value={value.name} />
      </td>
      <td>
      {value.type === 'Choices' && (
        <TextInput name="choices" onChange={handleChange} value={value.choices} />
      )}
      </td>
      <td>
        {Sample && (
          <Sample.C name="sample" onChange={handleChange} value={value.sample} choices={value.choices} />
        )}
      </td>
    </tr>
  );
}