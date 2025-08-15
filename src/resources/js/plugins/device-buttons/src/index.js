export default (editor, opts = {}) => {
  editor.getConfig().showDevices = 0;
  editor.Panels.addPanel({
    id: 'devices-c', 
    buttons: [
      {
        id: 'set-device-desktop',
        className: 'fas fa-desktop',
        attributes: {
          title: 'Desktop',
        },
        command: e => e.setDevice('Desktop'),
      },
      {
        id: 'set-device-tablet',
        className: 'fas fa-tablet',
        attributes: {
          title: 'Tablet',
        },
        command: e => e.setDevice('Tablet'),
      },
      {
        id: 'set-device-mobile',
        className: 'fas fa-mobile-alt',
        attributes: {
          title: 'Mobile',
        },
        command: e => e.setDevice('Mobile portrait'),
      },
    ]
  });
};