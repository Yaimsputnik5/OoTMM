import React from 'react';
import { SETTINGS } from '@ootmm/core';

import { Dropdown } from './Dropdown';
import { Checkbox } from './Checkbox';

export const Settings = ({ category, settings, setSetting }) => {
  const settingsData = SETTINGS.filter((s) => s.category === category);
  const enumList = settingsData.filter((x) => x.type == 'enum');
  const booleanList = settingsData.filter((x) => x.type == 'boolean');

  return (
    <form className="settings">
      <div>
        {booleanList.map((setting) => (
          <Checkbox
            key={setting.key}
            label={setting.name}
            checked={settings[setting.key]}
            onChange={(v) => setSetting({ [setting.key]: v })}
          />
        ))}
      </div>
      <div>
        {enumList.map((setting) => (
          <Dropdown
            value={settings[setting.key]}
            key={setting.key}
            label={setting.name}
            options={setting.values}
            onChange={(v) => setSetting({ [setting.key]: v })}
          />
        ))}
      </div>
    </form>
  );
};
