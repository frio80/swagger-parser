require('../test-environment.js');

env.resolved.externalRefs =
{
  'swagger': '2.0',
  'info': {
    'version': '1.0.0',
    'description': 'This file includes $refs to external files',
    'title': 'external refs'
  },
  'paths': {
    '/pets': {
      'post': {
        'responses': {
          '200': {
            'description': 'references the "pet.yaml" file',
            'schema': {
              '$ref': './pet.yaml'
            }
          },
          'default': {
            'description': 'references the "error.json" file',
            'schema': {
              '$ref': 'error.json'
            }
          }
        },
        'parameters': [
          {
            'required': true,
            'schema': {
              '$ref': 'pet.yaml'
            },
            'description': 'references the "pet.yaml" file',
            'in': 'body',
            'name': 'pet'
          }
        ]
      }
    }
  }
};
