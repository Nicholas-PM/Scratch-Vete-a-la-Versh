class HttpExtension {
  getInfo() {
    return {
      id: 'httpextension',
      name: 'HTTP POST',
      color1: '#FF8C1A',
      blocks: [
        {
          opcode: 'sendPostRequest',
          blockType: Scratch.BlockType.COMMAND,
          text: 'enviar POST a [URL] con JSON [DATOS]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://tudireccion.replit.app/guardar'
            },
            DATOS: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"nombre":"Nicholas"}'
            }
          }
        }
      ]
    };
  }

  async sendPostRequest(args) {
    try {
      await fetch(args.URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: args.DATOS
      });
    } catch (error) {
      console.error('Error al enviar POST:', error);
    }
  }
}

Scratch.extensions.register(new HttpExtension());
