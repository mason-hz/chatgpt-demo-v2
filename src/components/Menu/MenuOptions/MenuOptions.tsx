import ClearConversation from './ClearConversation';
import Api from './Api';
import ImportExportChat from '@components/ImportExportChat';
import SettingsMenu from '@components/SettingsMenu';

const MenuOptions = () => {
  return (
    <>
      <ClearConversation />
      <ImportExportChat />
      <Api />
      <SettingsMenu />
    </>
  );
};

export default MenuOptions;
