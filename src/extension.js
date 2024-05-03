import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

export default class extends Extension {
  enable() {
    this._backgroundSettings = this.getSettings('org.gnome.desktop.background');
    this._backgroundSettings.set_string('picture-options', 'none');
    this._backgroundSettings.set_string('primary-color', '#000000');

    this._interfaceSettings = this.getSettings('org.gnome.desktop.interface');
    this._interfaceSettings.set_boolean('clock-show-weekday', true);
    this._interfaceSettings.set_string('color-scheme', 'prefer-dark');
    this._interfaceSettings.set_string('gtk-theme', 'Yaru-dark');
    this._interfaceSettings.set_string('icon-theme', 'Yaru-dark');
    this._interfaceSettings.set_boolean('locate-pointer', true);
    this._interfaceSettings.set_boolean('show-battery-percentage', true);

    this._mouseSettings = this.getSettings('org.gnome.desktop.peripherals.mouse');
    this._mouseSettings.set_boolean('natural-scroll', true);

    this._privacySettings = this.getSettings('org.gnome.desktop.privacy');
    this._privacySettings.set_boolean('remember-recent-files', false);
    this._privacySettings.set_boolean('remove-old-temp-files', true);
    this._privacySettings.set_boolean('remove-old-trash-files', true);

    this._screensaverSettings = this.getSettings('org.gnome.desktop.screensaver');
    this._screensaverSettings.set_boolean('lock-enabled', false);

    this._searchProvidersSettings = this.getSettings('org.gnome.desktop.search-providers');
    this._searchProvidersSettings.set_boolean('disable-external', true);

    this._sessionSettings = this.getSettings('org.gnome.desktop.session');
    this._sessionSettings.set_uint('idle-delay', 0);

    this._mutterSettings = this.getSettings('org.gnome.mutter');
    this._mutterSettings.set_boolean('center-new-windows', true);

    this._nautilusSettings = this.getSettings('org.gnome.nautilus.preferences');
    this._nautilusSettings.set_string('default-folder-viewer', 'list-view');
    this._nautilusSettings.set_boolean('open-folder-on-dnd-hover', true);

    this._powerSettings = this.getSettings('org.gnome.settings-daemon.plugins.power');
    this._powerSettings.set_string('lid-close-ac-action', 'nothing');
    this._powerSettings.set_string('lid-close-battery-action', 'nothing');
    this._powerSettings.set_boolean('power-saver-profile-on-low-battery', false);
    this._powerSettings.set_string('sleep-inactive-battery-type', 'nothing');

    this._dashToDockSettings = this.getSettings('org.gnome.shell.extensions.dash-to-dock');
    this._dashToDockSettings.set_string('click-action', 'minimize');

    this._dingSettings = this.getSettings('org.gnome.shell.extensions.ding');
    this._dingSettings.set_boolean('show-home', false);
  }

  disable() {
    this._backgroundSettings.set_string('picture-options', 'zoom');
    this._backgroundSettings.set_string('primary-color', '#023c88');
    this._backgroundSettings = null;

    this._interfaceSettings.set_boolean('clock-show-weekday', false);
    this._interfaceSettings.set_string('color-scheme', 'default');
    this._interfaceSettings.set_string('gtk-theme', 'Yaru');
    this._interfaceSettings.set_string('icon-theme', 'Yaru');
    this._interfaceSettings.set_boolean('locate-pointer', false);
    this._interfaceSettings.set_boolean('show-battery-percentage', false);
    this._interfaceSettings = null;

    this._mouseSettings.set_boolean('natural-scroll', false);
    this._mouseSettings = null;

    this._privacySettings.set_boolean('remember-recent-files', true);
    this._privacySettings.set_boolean('remove-old-temp-files', false);
    this._privacySettings.set_boolean('remove-old-trash-files', false);
    this._privacySettings = null;

    this._screensaverSettings.set_boolean('lock-enabled', true);
    this._screensaverSettings = null;

    this._searchProvidersSettings.set_boolean('disable-external', false);
    this._searchProvidersSettings = null;

    this._sessionSettings.set_uint('idle-delay', 300);
    this._sessionSettings = null;

    this._mutterSettings.set_boolean('center-new-windows', false);
    this._mutterSettings = null;

    this._nautilusSettings.set_string('default-folder-viewer', 'icon-view');
    this._nautilusSettings.set_boolean('open-folder-on-dnd-hover', false);
    this._nautilusSettings = null;

    this._powerSettings.set_string('lid-close-ac-action', 'suspend');
    this._powerSettings.set_string('lid-close-battery-action', 'suspend');
    this._powerSettings.set_boolean('power-saver-profile-on-low-battery', true);
    this._powerSettings.set_string('sleep-inactive-battery-type', 'suspend');
    this._powerSettings = null;

    this._dashToDockSettings.set_string('click-action', 'focus-or-appspread');
    this._dashToDockSettings = null;

    this._dingSettings.set_boolean('show-home', true);
    this._dingSettings = null;
  }
}
