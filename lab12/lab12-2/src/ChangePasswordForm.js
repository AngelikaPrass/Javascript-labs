const ChangePasswordForm = ({ handleSubmit }) => {

    return (
        <form>
            <label>Hasło</label>
            <input id="password" type="password" />
            <button type="button" onClick={() => {
                handleSubmit(document.getElementById("password").value);
                document.getElementById("password").value = "";
            }}>Zatwierdź</button>
        </form>
    )
}

export default ChangePasswordForm;
