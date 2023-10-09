import React, { useState } from 'react';

import DashboardLayout from '../layout/DashboardLayout';
import Heading from '@/components/Heading';
import { Settings } from 'lucide-react';
const SettingsPage = () => {
 

  return (
    <DashboardLayout>
<Heading title="Settings" icon={Settings} bgColor="bg-gray-600/30" iconColor="text-gray-600"/>
    
    </DashboardLayout>
  );
};

export default SettingsPage;
