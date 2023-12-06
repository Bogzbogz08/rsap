document.addEventListener('DOMContentLoaded', function () {
    var getStartedButton = document.querySelector('.btn');

    getStartedButton.addEventListener('click', function () {
        document.querySelector('.first').classList.add('fly-in');
    });
});