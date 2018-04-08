// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function(){
	var color=$('#colorPicker').val();
	var row=$('#inputHeight').val();
	var col=$('#inputWidth').val();
	
	function makeGrid() {
		 $('tr').remove();
   for(var i=0;i<row;i++)
	   {
		   var tableRow=$('<tr></tr>');
		   $('table').append(tableRow);
		   for(var j=0;j<col;j++)
			   {
				 $(tableRow).append($('<td></td>'))  ;
			   }
	   }
}
	
   $('table').on('click','td',function(){
	    $(this).css('background-color',color);		 
	 });
	
	$('table').on('dblclick','td',function(){
		 $(this).css('background','none');
	});
	
	$('#colorPicker').on('change',function(){
		color=$('#colorPicker').val();
		console.log(color);
	});
	$('#submit').click(function(e){
		e.preventDefault();
		row=$('#inputHeight').val();
		col=$('#inputWidth').val();
		if(row>0 && col>0)
		makeGrid();
		else
		alert("Grid Height and Grid Width must be greater than zero");
	});
});



