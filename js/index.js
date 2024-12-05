const resultadoPacientes = (pacientes) => ({
  nPacientes: pacientes.length,
  nMayoresEdad: getNumeroMayoresEdad(pacientes),
  nHombresDiabeticos: getNumeroHombresDiabeticos(pacientes),
  totalDiasIngreso: getTotalDiasIngreso(pacientes),
  mediaEdadMujeres: getMediaEdadMujeres(pacientes),
});
const getNumeroMayoresEdad = (pacientes) =>
  pacientes.filter(({ paciente: { edad } }) => edad >= 18).length;
const getNumeroHombresDiabeticos = (pacientes) =>
  pacientes.filter(
    ({ dieta, paciente: { sexo } }) =>
      dieta === "Diabetes" && sexo.toLowerCase() === "h"
  ).length;
const getTotalDiasIngreso = (pacientes) =>
  pacientes.reduce(
    (acumulador, { diasIngresado }) => acumulador + diasIngresado,
    0
  );
const getMediaEdadMujeres = (pacientes) =>
  pacientes
    .filter(({ paciente: { sexo } }) => sexo.toLowerCase() === "m")
    .reduce(
      (acumulador, { paciente: { edad } }, i, mujeres) =>
        acumulador + edad / mujeres.length,
      0
    );
console.log(JSON.stringify(resultadoPacientes(pacientes), null, 1));
