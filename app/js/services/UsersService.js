angular.module('UsersService', []).factory('Users', function($http, $q) {
  const endpoint = 'http://localhost:3000/api';

  return {
    getUsers() {
      let deferred = $q.defer();
      const requestUrl = `${endpoint}/users`;

      $http
        .get(requestUrl)
        .then((res) => {
          deferred.resolve(res.data);
        })
        .catch((err) => {
          deferred.reject(err);
        });

      return deferred.promise;
    },

    getUser(userId) {
      const requestUrl = `${endpoint}/users/${userId}`;
      let deferred = $q.defer();

      $http.get(requestUrl).then((res) => {
        deferred.resolve(res.data);
      }).catch((err) => {
        deferred.reject(err);
      });

      return deferred.promise;
    },

    postUser(user) {
      const requestUrl = `${endpoint}/users`;
      let deferred = $q.defer();

      $http.post(requestUrl, user).then((res) => {
        deferred.resolve(res.data);
      }).catch((err) => {
        deferred.reject(err);
      });

      return deferred.promise;
    },

    updateUser(user) {
      const requestUrl = `${endpoint}/users/${user.id}`;
      let deferred = $q.defer();

      $http.put(requestUrl, user).then((res) => {
        deferred.resolve(res.data);
      }).catch((err) => {
        deferred.reject(err);
      });

      return deferred.promise;
    },

    deleteUser(userId) {
      const requestUrl = `${endpoint}/users/${userId}`;
      let deferred = $q.defer();

      $http.delete(requestUrl).then((res) => {
        deferred.resolve(res.data);
      }).catch((err) => {
        deferred.reject(err);
      });

      return deferred.promise;
    },
  }
});
