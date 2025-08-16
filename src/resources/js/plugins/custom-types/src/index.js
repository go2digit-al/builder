export default (editor, opts = {}) => {
  editor.BlockManager.add("iframe", {
    category: 'Basic',
    label: "iframe",
    type: "iframe",
    content: "<iframe> </iframe>",
    selectable: true,
    attributes: { class: 'fas fa-file' },
  });

  editor.DomComponents.addType("iframe", {
    isComponent: el => el.tagName === "IFRAME",
    model: {
      defaults: {
        type: "iframe",
        traits: [
          {
            type: "text",
            label: "src",
            name: "src"
          }
        ]
      }
    }
  });

  editor.DomComponents.addType('image', {
    isComponent: el => el.tagName == 'IMG',
    model: {
      defaults: {
        traits: [
          {
            name: 'src',
            placeholder: 'Insert image url here.',
          },
          {
            type: 'button',
            text: 'Choose Image',
            full: true, // Full width button
            command: function (editor) {
              editor.getSelected().trigger('active')
            },

          },
          'alt',
        ],
      },
    },
  });

  editor.DomComponents.addType('qr_code', {
    isComponent: el => el.tagName == 'IMG' && el.getAttribute('data') === 'qr-code',
    model: {
      defaults: {
        type: 'qr_code',
        tagName: 'img',
        attributes: {
          'data': 'qr-code',
        },
        traits: [
          {
            name: 'src',
            placeholder: 'QR code image URL',
          },
          'alt',
        ],
      },
    },
  });
};