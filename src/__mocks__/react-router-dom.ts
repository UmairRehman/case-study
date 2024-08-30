/* eslint-disable import/no-unused-modules */
const mockedUsedNavigate = jest.fn();

export const useNavigate = (): ReturnType<typeof mockedUsedNavigate> => mockedUsedNavigate;

module.exports = {
  ...jest.requireActual("react-router-dom")
};
