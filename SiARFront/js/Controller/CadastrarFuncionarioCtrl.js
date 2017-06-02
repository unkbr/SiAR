angular.module("SiARBack").controller("CadastrarFuncionarioCtrl", function ($scope, $http, funcionarioAPI, $location)
{
	$scope.funcionario = {};

	var formatDate = function (date) {
		var day = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();
		return year + "-" + month + "-" + day;
	}

	$scope.adicionarFuncionario = function(funcionario){
		$scope.adicionarF;
        funcionario.dta_nasc_funcionario = formatDate(funcionario.dta_nasc_funcionario);
        funcionarioAPI.postFuncionario(funcionario).success(function(data){
			delete $scope.funcionario;
			alert("Funcionário Cadastrado com Sucesso!");
			$location.path("/principal");
			$scope.funcionarioForm.$setPristine();
		});
	};
    $scope.carregarEstadosCivis = function(idt_estado_civil) {
        $http.get("http://localhost/SiARBack/estado_civil/?idt_estado_civil=" + idt_estado_civil).success(function (data) {
        });
    };

});