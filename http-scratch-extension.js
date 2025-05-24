class HTTPExtension {
  getInfo() {
    return {
      id: 'httpextension',
      name: 'HTTP POST',
      blocks: [
        {
          opcode: 'sendPostRequest',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Enviar POST a [URL] con datos [DATA]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://example.com/api'
            },
            DATA: {
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
        body: args.DATA
      });
    } catch (error) {
      console.error('Error al hacer POST:', error);
    }
  }
}

Scratch.extensions.register(new HTTPExtension());
