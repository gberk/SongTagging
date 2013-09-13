for %%f in (*.js) do (
	mocha %%f
	pause
)