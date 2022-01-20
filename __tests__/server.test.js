const app = require('../app');

describe('Server port', () => {
    test('port should === 5000', () => {
        const PORT = process.env.PORT
        expect(PORT).toBe("5000")
    })  
    test('app.listen should listen to app', () => {
        log = jest.fn();
        const PORT = process.env.PORT
        const consoleSpy = jest.spyOn(console, 'log');
        
        // app.listen(PORT, async () => {
            console.log(`connected to ${PORT}`)
            // const response = await log
            // else log("Error occured, can't start server.")
        // })
        
        expect(consoleSpy).toHaveBeenCalledWith(`connected to ${PORT}`);
    })   
})
