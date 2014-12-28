angular.module('hungryApp').
  provider('Repo', function () {
    this.$get = ['$q',
      function ($q) {

        function RepoFactory($res) {
          var repo = $res.query();

          var create = function () {
            return new $res();
          };

          var validate = function (entity) {
            return $q(function (resolve, reject) {
              if (entity) {
                resolve(); //todo: implement validation
              } else {
                reject("dish is null or undefined");
              }
            });
          };

          var save = function (entity) {
            return _.contains(repo, entity)
              ? entity.$update({ id: entity._id })
              : entity.$save(function () {
              repo.push(entity);
            });
          };

          var validateAndSave = function (entity) {
            return $q(function (resolve, reject) {
              validate(entity)
                .then(function () {
                  resolve(save(entity));
                })
                .catch(reject);
            });
          };

          var remove = function (entity) {
            var deferred = $q.defer();

            return deferred.promise;
          };

          this.all = repo;
          this.ready = repo.$promise;
          this.createNew = create;
          this.validateAndSave = validateAndSave;
          this.delete = remove;
        }

        return RepoFactory;
      }
    ];
  });
