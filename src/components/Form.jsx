import { Formik } from "formik";
import { Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import "./Form.css";

const UserForm = () => {
  const phoneRegex = RegExp(/[36]{1}[0-9]{9}/);
  const formSchema = Yup.object().shape({
    name: Yup.string().required("Nombre Requerido"),
    surname: Yup.string().required("Apellido Requerido"),
    city: Yup.string().required("Ciudad Requerida"),
    dateBrith: Yup.date("Campo Requerido"),
    doc: Yup.number().required("Campo Requerido"),
    docType: Yup.string().required("Campo Requerido"),
    phone: Yup.string()
      .matches(phoneRegex, "Inválido")
      .min(10, "Inválido")
      .required("Campo Requerido"),
    email: Yup.string().email().required("Correo Requerido"),
    password: Yup.string()
      .min(5, "Minimo 5 caracteres")
      .required("Contraseña Requerida"),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          city: "",
          dateBrith: "",
          doc: "",
          docType: "",
          phone: "",
          email: "",
          password: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: "" });
        }}
      >
        <Form style={{ width: 350 }}>
          <div>
            <label htmlFor="name"> Nombre: </label>
            <Field name="name" placeholder="Nombre" type="text" />
            <ErrorMessage name="name" component="div" className="Error" />
          </div>

          <div>
            <label htmlFor="surname"> Apellido: </label>
            <Field name="surname" placeholder="Apellido" type="text" />
            <ErrorMessage name="surname" component="div" className="Error" />
          </div>

          <div>
            <label htmlFor="city"> Ciudad: </label>
            <Field name="city" placeholder="Ciudad" type="text" />
            <ErrorMessage name="city" component="div" className="Error" />
          </div>

          <div>
            <label htmlFor="dateBrith"> Fecha Namiento </label>
            <Field
              name="dateBrith"
              placeholder="Fecha Nacimiento"
              type="date"
            />
            <ErrorMessage name="dateBrith" component="div" className="Error" />
          </div>

          <div>
            <label htmlFor="docType"> Tipo Documento: </label>
            <Field as="select" name="docType">
              <option value="">---</option>
              <option value="CC">Cedula Ciudadania</option>
              <option value="CE">Cedula Extranjeria</option>
              <option value="TI">Tarjeta Identidad</option>
              <option value="Pasaporte">Pasaporte</option>
            </Field>
            <ErrorMessage name="docType" component="div" className="Error" />
          </div>

          <div>
            <label htmlFor="doc"> Numero de Documento: </label>
            <Field name="doc" placeholder="Numero de Documento" type="number" />
            <ErrorMessage name="doc" component="div" className="Error" />
          </div>

          <div>
            <label htmlFor="phone"> Celular: </label>
            <Field name="phone" placeholder="Celular" type="number" />
            <ErrorMessage name="phone" component="div" className="Error" />
          </div>

          <div>
            <label htmlFor="email"> Email: </label>
            <Field name="email" placeholder="Correo" type="email" />
            <ErrorMessage name="email" component="div" className="Error" />
          </div>

          <div>
            <label htmlFor="password"> Contraseña: </label>
            <Field name="password" placeholder="Contraseña" type="password" />
            <ErrorMessage name="password" component="div" className="Error" />
          </div>
          <input type="submit" value="Enviar"></input>
        </Form>
      </Formik>
    </>
  );
};

export default UserForm;
