class DesignedSelect {
	constructor (select) {
		this.select = select;
	}

	replace () {
		const newSelect = this.buildNewSelect();
		this.select.classList.add('hide');
		this.select.parentNode.appendChild(newSelect);
		this.addFunctionality(newSelect);
	}

	buildNewSelect () {
		const designedSelectContainer = document.createElement('div');
		designedSelectContainer.classList.add('designed-select-container');

		const options = Array.from(this.select.querySelectorAll('option'));
		options.forEach(o => {
			let designedSelectOption = document.createElement('span');
			designedSelectOption.classList.add('designed-select-option');
			designedSelectOption.dataset.value = o.value;
			designedSelectOption.textContent = o.textContent;
			designedSelectContainer.appendChild(designedSelectOption);
		});

		const selectPadding = 0.5;
		designedSelectContainer.style.setProperty('--select-padding', `${selectPadding}rem`);
		designedSelectContainer.style.setProperty('--select-height', `${2*selectPadding + options.length}rem`);
		return designedSelectContainer;
	}
	addFunctionality (selectContainer) {
		selectContainer.addEventListener('click', e => {
			e.currentTarget.classList.toggle('opened');
		});
	}
}

const designedSelect = new DesignedSelect(document.querySelector('select'));
const newDesignedSelect = designedSelect.replace();
