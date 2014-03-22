angular.module('reflowUploadMockup', ['ui.bootstrap']);

function UploadCtrl($scope) {
    $scope.configs = [{name:'Project'},{name:'Site'},{name:'Cytometer'}];
    $scope.configsSet = false;
    $scope.cols = ['Acquisition Date','Site Panel','Subject','Visit','Stimulation','Specimen','Pre-treatment','Storage'];
    $scope.choices = {};
    $scope.choices['Project'] = ['Duke Test'];
    $scope.choices['Site'] = ['ID10','ID08'];
    $scope.choices['Cytometer'] = ['BD Canto II'];
    $scope.choices['Acquisition Date'] = ['1999-09-09','2014-03-20'];
    $scope.choices['Site Panel'] = ['CMV Multimer Full Stain (1)', 'CMV Multimer FMO (1)'];
    $scope.choices['Subject'] = ['L12','L17'];
    $scope.choices['Visit'] = ['SO3'];
    $scope.choices['Stimulation'] = ['Unstimulated'];
    $scope.choices['Specimen'] = ['PBMC','BAL','WB','BM','LNC'];
    $scope.choices['Pre-treatment'] = ['In Vitro','Ex Vivo'];
    $scope.choices['Storage'] = ['Fresh','Cryopreserved'];

    $scope.rows = [];
    $scope.checkedRows = [];
    
    for(var i=0;i<10;i++) {
        var row = {};
        row['Filename'] = 'file00' + i + '.fcs';
        $scope.cols.forEach( function(col) {
            if($scope.choices[col]) {
                row[col] = $scope.choices[col][0]
            }
        });
        $scope.rows.push(row);
    };

    $scope.updateChecks = function() {
        $scope.checkedRows = $scope.rows.filter( function (row) { return row.checked; });
    };
    
    $scope.applyToAll = function(col,choice) {
        $scope.checkedRows.forEach( function(row) {
            if(row.checked) {
                row[col] = choice;
            }
        });
    };
    
    $scope.toggleAll = function(checkAll) {
        $scope.rows.forEach( function(row) { 
            row.checked = !checkAll;
        });
        $scope.updateChecks();
    }

    $scope.checkConfigs = function() {
        var allChecked = true;
        $scope.configs.forEach( function(config) {
            allChecked = allChecked && (config.value && config.value != "");
        });
        $scope.configsSet = allChecked;
    }

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
  };

  $scope.dateOptions = {
    'year-format': "'yy'",
    'starting-day': 1
  };

}