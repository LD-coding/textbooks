export const borders = [
  {"AK":["WA"],"WA":["AK","ID","OR"],"AL":["FL","GA","MS","TN"],"FL":["AL","GA"],"GA":["AL","FL","NC","SC","TN"],"MS":["AL","AR","LA","TN"],"TN":["AL","AR","GA","KY","MO","MS","NC","VA"],"AR":["LA","MO","MS","OK","TN","TX"],"LA":["AR","MS","TX"],"MO":["AR","IA","IL","KS","KY","NE","OK","TN"],"OK":["AR","CO","KS","MO","NM","TX"],"TX":["AR","LA","NM","OK"],"AZ":["CA","NM","NV","UT"],"CA":["AZ","HI","NV","OR"],"CO":["KS","NE","NM","OK","UT","WY"],"NM":["AZ","CO","OK","TX"],"NV":["AZ","CA","ID","OR","UT"],"UT":["AZ","CO","ID","NV","WY"],"HI":["CA"],"OR":["CA","ID","NV","WA"],"KS":["CO","MO","NE","OK"],"NE":["CO","IA","KS","MO","SD","WY"],"WY":["CO","ID","MT","NE","SD","UT"],"CT":["MA","NY","RI"],"MA":["CT","NH","NY","RI","VT"],"NY":["CT","MA","NJ","PA","VT"],"RI":["CT","MA"],"DC":["MD","VA"],"MD":["DC","DE","PA","VA","WV"],"VA":["DC","KY","MD","NC","TN","WV"],"DE":["MD","NJ","PA"],"NJ":["DE","NY","PA"],"PA":["DE","MD","NJ","NY","OH","WV"],"NC":["GA","SC","TN","VA"],"SC":["GA","NC"],"IA":["IL","MN","MO","NE","SD","WI"],"IL":["IA","IN","KY","MO","WI"],"MN":["IA","ND","SD","WI"],"SD":["IA","MN","MT","ND","NE","WY"],"WI":["IA","IL","MI","MN"],"ID":["MT","NV","OR","UT","WA","WY"],"MT":["ID","ND","SD","WY"],"IN":["IL","KY","MI","OH"],"KY":["IL","IN","MO","OH","TN","VA","WV"],"MI":["IN","OH","WI"],"OH":["IN","KY","MI","PA","WV"],"WV":["KY","MD","OH","PA","VA"],"NH":["MA","ME","VT"],"VT":["MA","NH","NY"],"ME":["NH"],"ND":["MN","MT","SD"]},

  {"Colombia": ["Venezuela","Brazil","Peru","Ecuador"],"Venezuela": ["Colombia","Brazil","Guyana"],"Guyana": ["Venezuela","Brazil","Suriname"],"Suriname": ["Guyana","Brazil","FrenchGuiana"],"FrenchGuiana": ["Suriname","Brazil"],"Ecuador": ["Peru","Colombia"],"Peru": ["Ecuador","Colombia","Brazil","Bolivia","Chile"],"Bolivia": ["Peru","Brazil","Paraguay","Argentina","Chile"],"Paraguay": ["Argentina","Bolivia","Brazil"],"Chile": ["Peru","Bolivia","Argentina"],"Argentina": ["Chile","Bolivia","Paraguay","Brazil","Uruguay"],"Uruguay": ["Argentina","Brazil"],"Brazil": ["FrenchGuiana","Suriname","Guyana","Venezuela","Colombia","Peru","Bolivia","Paraguay","Argentina","Uruguay"]},

  {"Schleswig-Holstein":["Niedersachsen","Hamburg","Mecklenburg-Vorpommern"],"Hamburg":["Niedersachsen","Schleswig-Holstein"],"Brandenburg":["Mecklenburg-Vorpommern","Niedersachsen","Sachsen-Anhalt","Sachsen","Berlin"],"Berlin":["Brandenburg"],"Mecklenburg-Vorpommern":["Schleswig-Holstein","Niedersachsen","Brandenburg"],"Niedersachsen":["Schleswig-Holstein","Hamburg","Mecklenburg-Vorpommern","Brandenburg","Sachsen-Anhalt","Thüringen","Hessen","Nordrhein-Westfalen","Bremen"],"Bremen":["Niedersachsen"],"Sachsen-Anhalt":["Niedersachsen","Brandenburg","Sachsen","Thüringen"],"Sachsen":["Brandenburg","Sachsen-Anhalt","Thüringen","Bayern"],"Thüringen":["Hessen","Niedersachsen","Sachsen-Anhalt","Sachsen","Bayern"],"Nordrhein-Westfalen":["Niedersachsen","Hessen","Rheinland-Pfalz"],"Hessen":["Rheinland-Pfalz","Nordrhein-Westfalen","Niedersachsen","Thüringen","Bayern","Baden_Württemberg"],"Rheinland-Pfalz":["Nordrhein-Westfalen","Hessen","Baden_Württemberg","Saarland"],"Saarland":["Rheinland-Pfalz"],"Baden_Württemberg":["Rheinland-Pfalz","Hessen","Bayern"],"Bayern":["Baden_Württemberg","Hessen","Thüringen"]},

  {"Northumberland":["Cumbria","County_Durham","Tyne_and_Wear"],"Tyne_and_Wear":["Northumberland","County_Durham"],"Cumbria":["Northumberland","North_Yorkshire","County_Durham","Lancashire"],"County_Durham":["Tyne_and_Wear","Northumberland","Cumbria","North_Yorkshire"],"North_Yorkshire":["County_Durham","Cumbria","Lancashire","West_Yorkshire","South_Yorkshire","East_Riding_of_Yorkshire"],"Lancashire":["Cumbria","North_Yorkshire","West_Yorkshire","Greater_Manchester","Merseyside"],"West_Yorkshire":["Greater_Manchester","Lancashire","North_Yorkshire","South_Yorkshire","Derbyshire"],"East_Riding_of_Yorkshire":["North_Yorkshire","South_Yorkshire","Lincolnshire"],"Greater_Manchester":["Merseyside","Lancashire","West_Yorkshire","Derbyshire","Cheshire"],"Merseyside":["Lancashire","Greater_Manchester","Cheshire"],"South_Yorkshire":["West_Yorkshire","North_Yorkshire","East_Riding_of_Yorkshire","Lincolnshire","Nottinghamshire","Derbyshire"],"Cheshire":["Merseyside","Greater_Manchester","Derbyshire","Staffordshire","Shropshire"],"Derbyshire":["Cheshire","Greater_Manchester","West_Yorkshire","South_Yorkshire","Nottinghamshire","Leicestershire","Warwickshire","Staffordshire"],"Nottinghamshire":["Derbyshire","South_Yorkshire","Lincolnshire","Leicestershire"],"Lincolnshire":["East_Riding_of_Yorkshire","South_Yorkshire","Nottinghamshire","Leicestershire","Rutland","Cambridgeshire","Norfolk"],"Staffordshire":["Shropshire","Cheshire","Derbyshire","Leicestershire","Warwickshire","West_Midlands"],"Leicestershire":["Derbyshire","Nottinghamshire","Lincolnshire","Rutland","Northamptonshire","Warwickshire","Staffordshire"],"Rutland":["Leicestershire","Lincolnshire","Cambridgeshire","Northamptonshire"],"Norfolk":["Lincolnshire","Cambridgeshire","Suffolk"],"Shropshire":["Cheshire","Staffordshire","Worcestershire","Herefordshire"],"West_Midlands":["Staffordshire","Warwickshire","Worcestershire"],"Warwickshire":["Staffordshire","Derbyshire","Leicestershire","Northamptonshire","Oxfordshire","Gloucestershire","Worcestershire","West_Midlands"],"Northamptonshire":["Warwickshire","Leicestershire","Rutland","Cambridgeshire","Bedfordshire","Buckinghamshire","Oxfordshire"],"Cambridgeshire":["Northamptonshire","Rutland","Lincolnshire","Norfolk","Suffolk","Essex","Hertfordshire","Bedfordshire"],"Suffolk":["Norfolk","Cambridgeshire","Essex"],"Essex":["Suffolk","Cambridgeshire","Hertfordshire","Greater_London","Kent"],"Greater_London":["Buckinghamshire","Hertfordshire","Essex","Kent","Surrey","Berkshire"],"Buckinghamshire":["Oxfordshire","Northamptonshire","Bedfordshire","Hertfordshire","Greater_London","Berkshire"],"Bedfordshire":["Northamptonshire","Cambridgeshire","Hertfordshire","Buckinghamshire"],"East_Sussex":["West_Sussex","Kent","Surrey"],"Surrey":["Hampshire","Berkshire","Greater_London","Kent","East_Sussex","West_Sussex"],"West_Sussex":["East_Sussex","Kent","Surrey","Hampshire"],"Berkshire":["Oxfordshire","Buckinghamshire","Greater_London","Surrey","Hampshire","Wiltshire"],"Oxfordshire":["Gloucestershire","Warwickshire","Northamptonshire","Buckinghamshire","Berkshire","Wiltshire"],"Gloucestershire":["Herefordshire","Worcestershire","Warwickshire","Oxfordshire","Wiltshire","Somerset"],"Wiltshire":["Somerset","Gloucestershire","Oxfordshire","Berkshire","Hampshire","Dorset"],"Hampshire":["Dorset","Wiltshire","Berkshire","Surrey","West_Sussex"],"Dorset":["Devon","Somerset","Wiltshire","Hampshire"],"Somerset":["Devon","Dorset","Wiltshire","Gloucestershire"],"Devon":["Cornwall","Somerset","Dorset"],"Cornwall":["Devon"],"Worcestershire":["Herefordshire","Shropshire","Staffordshire","West_Midlands","Warwickshire","Gloucestershire"],"Hertfordshire":["Bedfordshire","Cambridgeshire","Essex","Greater_London","Buckinghamshire"],"Herefordshire":["Shropshire","Worcestershire","Gloucestershire"],"Kent":["Essex","Greater_London","Surrey","East_Sussex"]}
];