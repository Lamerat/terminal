# terminal
Logging in console with colors

### Usage
```JavaScript
const { terminal } = require('@sea_flanker/terminal')

// Alt to console.log (no formatting)
terminal.log('Test logging')

// Log with font color
terminal.red().log('Test logging')

// Log with background color
terminal.bgMagenta().log('Test logging')

// Log with font color and underline
terminal.cyan().underline().log('Test logging')

// Log with font color and underline and bold
terminal.cyan().underline().bold().log('Test logging')
```