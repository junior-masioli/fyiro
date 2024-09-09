import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from '../../styles/Home.module.scss';

function Form() {
    // form validation rules
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
    });

    const formOptions = {
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(validationSchema),
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: false,
        shouldUseNativeValidation: false,
    };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState, reset} = useForm(formOptions);
    const { errors, isValid } = formState;

    function onSubmit(data) {
        reset()
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <form className={styles.footer__form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.footer__form_email}>
                <input placeholder="Email Address" name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                {isValid.email && <p>Field is Valid.</p>}
            </div>
            <input type="submit" className={styles.footer__form_submit} />
            <div className={styles.footer__form_email_error}>{errors.email?.message}</div>
        </form>
    )
}

export default Form