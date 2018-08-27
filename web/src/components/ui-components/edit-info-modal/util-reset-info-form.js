'use strict';

function resetForm(formData) {
    const userName = formData.userName;
    const gender = formData.gender;

    $('#editInfoForm').find('[name=userName]').val(userName);
    $('#editInfoForm').find(`[name=gender][value=${gender}]`).prop('checked', true);
}

module.exports = resetForm;
