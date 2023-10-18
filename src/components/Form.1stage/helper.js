function validate(data, values) {
    const errors = [];

    data.forEach(({ name, validation }) => {
        const value = values[name];

        if (validation.isReq && value === '') {
            errors.push(`pole ${name} jest wymagane.`);
        }
        if (validation.regex && !validation.regex.test(value)) {
            errors.push(`pole ${name} jest wypelnione nieprawidlowo.`);
        }
    });
    return errors;
}
export default validate;
