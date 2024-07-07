help:
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
.PHONY: help

NPM = npm

init: ## Initialize the project and install dependencies
	$(NPM) init -y
	$(NPM) install playwright @playwright/test allure-playwright --save-dev
	$(NPM) install --save-dev @types/node
.PHONY: init

test: ## Run the tests
	$(NPM) run test
.PHONY: test

allure-generate: ## Generate Allure reports
	$(NPM) run allure:generate
.PHONY: allure-generate

allure-open: ## Open Allure reports
	$(NPM) run allure:open
.PHONY: allure-open

clean: ## Clean the project
	rm -rf node_modules/ allure-results/ allure-report/ test-results/ package-lock.json
.PHONY: clean
