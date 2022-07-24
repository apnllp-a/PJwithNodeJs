var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//COMMON
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');

//HEADER
var personalInfoHeaderRouter = require('./routes/HEADER/personal_info');
var tableDocumentsRouter = require('./routes/HEADER/table_documents');
var tableDocumentsConfirmRouter = require('./routes/HEADER/table_documents-confirm');
var tableListNameHeaderRouter = require('./routes/HEADER/table_listname-header');

//BOARD
var personalIfoBoardRouter = require('./routes/BOARD/personal_info');

//IT
var personalInfoRouter = require('./routes/IT/personal_info');
var listNameRouter = require('./routes/IT/list_name');
var confirmRegisterRouter = require('./routes/IT/confirm_regis');
var setPermissionRouter = require('./routes/IT/set_permission');
var personalEditRouter = require('./routes/IT/personal_edit');
var personalInfoForEditRouter = require('./routes/IT/personal_info-for-edit');
var personalNameEditRouter = require('./routes/IT/personal_name-edit');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//COMMON
app.use('/', loginRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

//HEADER
app.use('/personal_info-header', personalInfoHeaderRouter);
app.use('/table_documents', tableDocumentsRouter);
app.use('/table_documents-confirm', tableDocumentsConfirmRouter);
app.use('/table_listname-header', tableListNameHeaderRouter);

//BOARD 
app.use('/personal_info-board', personalIfoBoardRouter);

//IT
app.use('/list_name', listNameRouter);
app.use('/confirm_regis', confirmRegisterRouter);
app.use('/set_permission', setPermissionRouter);
app.use('/personal_info', personalInfoRouter);
app.use('/personal_edit', personalEditRouter);
app.use('/personal_info-for-edit', personalInfoForEditRouter);
app.use('/personal_name-edit', personalNameEditRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;