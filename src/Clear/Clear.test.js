// describe('App', () => {

//     // Button renders with correct class and aria-label
//     it('should render button with correct class and aria-label', () => {
//       const { getByRole } = render(<Clear setSelectedNpsState={() => {}} setResults={() => {}} />);
//       const button = getByRole('button', { name: /clear state selection and results/i });
//       expect(button).toHaveClass('clear-button');
//     });

//     // Button click when setSelectedNpsState is undefined
//     it('should not throw error when button is clicked and setSelectedNpsState is undefined', () => {
//       const setResultsMock = jest.fn();
//       const { getByRole } = render(<Clear setResults={setResultsMock} />);
//       const button = getByRole('button', { name: /clear state selection and results/i });
//       expect(() => {
//         fireEvent.click(button);
//       }).not.toThrow();
//     });
// });
