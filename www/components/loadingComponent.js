(function() {
	'use strict';

	define([
		'm',
		'services/storageService',
		'services/networkService',
		'services/daemonService'
	], function(m, storage, network, daemon) {

		var component = {};

		component.controller = function() {
			var self = this;

			// Récupère les retours des promises d'initialisation
			// Change le percent de la barre de loading en fonction
			// Vérifie si logged in
			// Si logged in va à la home
			// Sinon va à login
		};

		component.view = function(c) {
			return m('.page', [
				m('header.page-header', 'Kernel test'),
				m('section.page-section', [
					m('.wrapper-valign', [
						m('h2.title', 'Loading'),
						m('.loading')
					])
				]),
				m('footer.page-footer', 'v0.0.1 dev')
			]);
		};

		return component;

	});

})();
