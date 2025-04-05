
import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-gray-500">Manage your account and preferences</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <SettingsIcon className="h-16 w-16 text-campus-300 mb-4" />
        <h2 className="text-xl font-medium mb-2">Settings Page</h2>
        <p className="text-gray-500 max-w-md">
          This page will contain options to manage your account settings, notification
          preferences, privacy settings, and more.
        </p>
      </div>
    </div>
  );
};

export default Settings;
