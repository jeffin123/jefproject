
angular.module('app', [
  
    'ngRoute'
    'ngAnimate'

   
    'ui.bootstrap'
    'easypiechart'
    'mgo-angular-wizard'
    'textAngular'
    'ui.tree'
    'ngMap'
    'ngTagsInput'

  
    'app.ui.ctrls'
    'app.ui.directives'
    'app.ui.services'
    'app.controllers'
    'app.directives'
    'app.form.validation'
    'app.ui.form.ctrls'
    'app.ui.form.directives'
    'app.tables'
    'app.map'
    'app.task'
    'app.localization'
    'app.chart.ctrls'
    'app.chart.directives'
    'app.page.ctrls'
])
    
.config([
    '$routeProvider'
    ($routeProvider) ->
        $routeProvider
            # dashboard
            .when(
                '/'
                redirectTo: '/dashboard'
            )
            .when(
                '/dashboard'
                templateUrl: 'views/dashboard.html'
            )

            

            # Forms
            .when(
                '/forms/elements'
                templateUrl: 'views/wireline/sms.html'
            )
            .when(
                '/forms/layouts'
                templateUrl: 'views/wireline/dropcall.html'
            )
            

       

            # Tables
            .when(
                '/wireless/call'
                templateUrl: 'views/wireless/call.html'
            )
            .when(
                '/tables/responsive'
                templateUrl: 'views/wireless/rcf.html'
            )
            
            # Charts
          
            .when(
                '/longdistance/rms'
                templateUrl: 'views/longdistance/rms.html'
            )
            .when(
                '/charts/flot'
                templateUrl: 'views/longdistance/voice.html'
            )

           
            # Tasks
            .when(
                '/tasks'
                templateUrl: 'views/tasks/tasks.html'
            )

            .otherwise(
                redirectTo: '/404'
            )
])
# .run([
#     '$rootScope'
#     ($rootScope) ->

#         $rootScope.$on('$routeChangeStart', (event, next, current) ->
#             console.log 'routeChangeStart'
#         )

#         $rootScope.$on('$routeChangeSuccess', (event, current, previous, rejection) ->
#             console.log 'routeChangeSuccess'
#         )
# ])
