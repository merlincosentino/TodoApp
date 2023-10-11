import { useState, ChangeEvent } from "react";

interface FormState {
    [key: string]: any;
}

export const useForm = (initialForm: FormState = {}) => {
    const [formState, setFormState] = useState<FormState>(initialForm);

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = (): void => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};