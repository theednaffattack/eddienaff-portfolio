const humps = require('humps');

function normalize (name) {
  return name.match(/([^\/]+)$/)[1];
}

module.exports = {
  locals: function(options) {
    // Return custom template variables here.
    var name = normalize(options.entity.name);

    return {
      pascalEntityName: humps.pascalize(name),
      camelEntityName: humps.camelize(name),
      snakeEntityName: humps.depascalize(humps.pascalize(name)),
      dashesEntityName: humps.depascalize(name, { separator: '-' })
    }
  },

  fileMapTokens: function(options) {
    // Return custom tokens to be replaced in your files
    var name = normalize(options.entity.name);

    return {
      __name__: function(options){
        // logic to determine value goes here
        return humps.pascalize(name);
      },
      __dirname__: function (options) {
        return options.entity.name.split('/').map(humps.pascalize).join('/');
      }
    }
  }
}
