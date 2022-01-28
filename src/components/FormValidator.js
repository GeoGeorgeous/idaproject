export default class FormValidator {
  constructor(submitButton, inputSelector, errorClass, form) {
    this._form = form;
    this._submitBtn = submitButton;
    this._inputList = Array.from(this._form.querySelectorAll(inputSelector));
    this._errorClass = errorClass;
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement, inputElement.validationMessage);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(this._errorClass);
  }

  _enableBtn() {
    this._submitBtn.disabled = false;
  }

  _disableBtn() {
    this._submitBtn.disabled = true;
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputValue) => !inputValue.validity.valid);
  }

  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._disableBtn();
    } else {
      this._enableBtn();
    }
  }

  _setEventListeners() {
    this._toggleButtonState(this._inputList);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._disableBtn();
    });
    this._setEventListeners();
  }
}
