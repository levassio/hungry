angular.module('hungryApp').
  provider('Repo', function () {
    this.$get = ['$q',
      function ($q) {

        function RepoBase($res, childRepositories) {
          var repo = $res.query();

          var create = function () {
            return new $res();
          };

          var reload = function () {

            var reloaded = $res.query(function () {
              while(repo.length > 0) {
                repo.pop();
              }

              angular.forEach(reloaded, function (entity) {
                repo.push(entity);
              });
            });
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

            var contains = _.contains(repo, entity);

            return contains
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
            return entity.$remove({ id: entity._id }, function () {
              _.pull(repo, entity);

              if(angular.isArray(childRepositories))
              {
                angular.forEach(childRepositories, function (child) {
                  child.reload();
                });
              }

            });
          };

          this.reload = reload;
          this.all = repo;
          this.ready = repo.$promise;
          this.createNew = create;
          this.validateAndSave = validateAndSave;
          this.delete = remove;
        }

        return RepoBase;
      }
    ];
  });
