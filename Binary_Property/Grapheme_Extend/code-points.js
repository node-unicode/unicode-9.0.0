module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,153,201,149,237,56,12,67,19,170,133,53,113,136,229,159,206,63,141,230,5,222,194,224,43,155,132,105,17,150,40,215,191,140,250,203,232,191,204,111,142,53,199,158,227,204,113,231,120,115,196,28,57,199,248,229,248,213,248,213,248,213,248,213,248,213,248,213,248,213,248,213,248,213,248,213,248,245,248,245,248,245,248,245,248,245,248,245,248,245,248,245,248,245,248,117,255,213,247,205,177,230,216,115,156,57,238,28,111,142,152,35,231,168,57,198,111,141,223,26,191,53,126,107,252,214,248,173,241,91,227,183,198,111,141,223,26,191,61,126,123,252,246,248,237,241,219,227,183,199,111,143,223,30,191,61,126,123,252,206,248,157,241,59,227,119,198,239,140,223,25,191,51,126,103,252,206,248,157,241,187,227,119,199,239,142,223,29,191,59,126,119,252,238,248,221,241,187,227,119,199,239,141,223,27,191,55,126,111,252,222,248,189,241,123,227,247,198,239,141,223,27,191,24,191,24,191,24,191,24,191,24,191,24,191,24,191,24,191,169,71,77,61,106,234,81,83,143,154,122,212,212,163,166,30,53,245,168,169,71,77,61,106,234,81,83,143,181,230,38,3,1,36,80,0,23,230,78,3,235,111,221,121,254,129,0,18,40,96,92,238,12,194,0,46,51,12,3,7,184,0,17,135,136,67,196,33,226,16,113,137,184,68,92,34,46,17,151,136,75,196,37,226,18,113,137,184,68,60,34,30,17,143,136,71,196,35,130,196,47,137,95,18,191,36,126,73,252,146,248,85,226,65,68,16,17,68,4,17,65,68,16,17,68,4,17,137,115,226,151,248,37,46,137,11,35,244,184,239,227,190,143,251,62,238,251,184,239,227,190,143,251,62,238,251,184,239,227,190,143,251,198,168,109,64,191,14,112,129,7,4,144,64,1,19,27,35,187,1,34,54,17,155,136,77,4,99,31,140,125,48,246,193,216,7,99,31,140,125,48,246,193,88,37,195,148,12,83,146,110,146,110,146,110,146,110,146,110,146,100,146,100,146,100,146,100,50,56,201,224,36,67,194,219,188,120,149,23,239,242,226,101,94,188,205,139,87,104,161,229,133,152,23,106,94,200,121,161,231,133,160,23,138,94,72,122,161,233,133,168,23,170,94,200,122,161,235,133,176,23,202,94,72,123,161,237,133,184,23,234,94,200,123,161,239,133,192,23,10,95,72,124,161,241,133,200,23,42,95,141,115,227,220,56,55,206,141,115,227,220,56,55,206,45,103,30,171,231,177,246,55,227,55,160,95,61,48,227,55,176,128,13,28,224,2,111,32,185,154,92,77,174,38,87,83,23,2,128,42,161,74,168,10,231,194,185,112,46,156,11,231,194,185,112,46,252,26,191,198,175,241,155,105,109,175,121,63,6,10,24,151,61,79,52,176,128,13,28,224,2,15,8,32,129,2,136,32,211,77,166,155,76,55,153,110,50,221,100,186,201,116,147,233,38,211,77,166,155,76,55,153,110,50,221,5,61,233,110,210,221,164,187,139,8,114,222,228,188,201,121,147,243,38,231,221,68,52,17,77,68,19,209,68,204,132,188,207,204,200,3,11,216,192,1,46,240,128,137,56,60,219,225,177,14,143,112,120,132,195,35,28,30,225,240,8,39,185,202,115,28,158,227,144,243,33,201,83,250,51,129,2,32,32,201,67,146,151,91,94,110,201,100,180,47,57,95,210,189,36,121,73,242,146,228,35,201,247,241,107,1,136,225,33,6,222,223,205,251,187,121,37,55,175,223,230,245,219,188,106,3,92,64,32,113,116,110,72,227,114,129,196,131,196,131,17,15,178,10,178,202,121,23,54,111,227,230,109,220,188,141,155,183,113,32,129,241,227,149,28,224,2,207,198,42,184,89,146,54,115,245,102,162,222,204,212,83,147,5,108,224,0,195,87,212,163,121,232,230,161,123,38,153,129,161,234,121,27,167,18,130,26,152,169,229,160,246,131,158,207,26,161,15,60,96,92,102,54,7,14,192,133,171,115,9,20,208,3,143,63,31,127,78,181,6,134,106,127,192,100,127,208,233,65,157,7,57,30,164,119,144,222,65,87,7,93,29,4,114,16,200,25,28,152,193,25,56,192,5,30,48,126,119,84,114,238,2,54,127,206,91,123,40,207,192,3,10,24,130,119,57,71,226,111,230,151,19,83,238,67,81,14,69,25,40,96,252,2,63,106,52,48,206,49,5,24,192,143,39,10,158,40,30,126,60,71,4,126,83,253,195,20,121,152,24,15,149,25,8,32,129,2,38,130,41,242,48,69,30,154,152,67,23,115,168,224,161,130,135,70,230,208,201,28,166,175,195,244,117,168,214,128,126,141,75,143,44,6,46,240,128,0,116,161,128,137,101,134,59,204,112,135,25,238,48,195,29,102,184,195,12,119,152,225,14,147,219,0,206,140,125,147,85,147,85,39,126,137,95,113,174,56,87,16,144,110,151,46,64,64,186,77,186,77,186,77,101,186,137,32,221,166,60,77,206,77,121,90,137,83,203,158,90,222,111,222,163,129,5,108,224,0,23,120,64,0,9,20,64,196,34,98,17,177,136,88,68,44,34,22,17,139,136,69,196,34,98,17,177,137,216,68,108,34,54,17,155,136,77,196,38,98,19,177,137,152,194,223,53,229,190,136,250,34,234,139,168,47,162,190,136,250,34,234,139,168,71,101,31,128,243,195,239,225,247,112,121,184,20,127,206,48,221,213,248,53,126,51,161,220,205,115,108,158,99,243,28,155,231,216,164,49,19,224,192,225,194,136,112,218,166,33,165,160,151,130,94,10,250,122,134,100,32,129,26,56,2,46,140,78,31,21,124,84,48,24,206,96,56,227,155,250,14,244,128,46,36,23,146,11,83,223,96,81,10,22,165,96,81,10,86,156,96,177,9,22,155,96,177,9,22,155,96,177,25,32,162,137,104,252,154,136,134,126,106,25,235,3,70,137,65,59,24,12,68,240,18,7,235,199,76,127,67,64,155,23,204,172,65,155,23,180,116,65,75,23,116,105,65,31,22,244,97,65,31,22,145,192,172,56,3,19,145,83,143,129,11,60,32,128,4,10,24,103,154,152,160,127,9,38,203,96,138,28,224,42,124,204,147,193,123,25,180,46,65,235,18,188,161,193,139,24,188,136,65,175,18,108,61,130,189,71,176,249,8,118,31,193,246,35,216,127,4,27,144,96,231,17,180,238,65,239,30,52,239,65,247,30,180,239,65,255,30,52,240,65,7,31,180,61,65,219,19,180,61,65,219,19,180,61,65,219,19,180,61,209,35,129,129,3,92,96,46,240,154,6,111,104,208,131,4,175,105,240,154,6,69,14,222,208,129,217,196,160,241,68,227,137,198,19,141,39,26,79,52,158,104,60,209,120,162,241,252,46,126,23,63,54,88,84,63,169,126,82,253,164,17,73,26,145,164,7,25,192,133,205,21,239,66,242,26,12,232,207,185,37,186,31,224,194,232,52,81,241,128,126,93,224,1,1,36,80,192,132,109,242,219,228,199,194,60,144,192,92,61,220,156,117,122,96,3,184,144,1,203,118,178,108,39,203,118,178,108,39,203,118,178,6,36,203,246,0,17,108,241,88,8,146,133,96,0,103,182,121,51,213,252,229,204,30,192,92,189,100,122,73,237,146,26,237,116,134,127,177,23,37,73,214,238,164,157,78,218,233,164,157,78,218,233,100,61,79,214,243,164,157,78,218,233,164,157,78,218,233,100,141,79,214,248,100,57,25,32,226,16,113,136,56,68,28,34,14,17,148,130,133,37,89,88,6,136,96,136,131,33,142,75,196,37,226,18,193,136,199,35,130,97,15,134,61,24,246,120,68,60,34,30,17,143,136,71,196,35,34,136,8,34,130,136,32,34,136,8,34,130,136,32,66,187,112,182,225,129,34,130,202,208,136,12,112,33,181,175,101,227,201,110,249,178,93,166,81,42,26,165,1,93,96,75,202,158,249,178,105,190,236,154,47,219,230,187,180,127,37,130,157,243,101,235,124,217,59,179,68,23,85,40,170,48,64,4,27,232,203,14,250,110,109,121,137,96,19,125,217,69,179,141,44,22,245,98,81,47,182,145,197,54,178,216,70,22,219,200,210,54,114,102,229,35,188,66,182,167,12,228,90,76,30,224,19,134,208,231,75,200,166,85,251,32,111,132,188,19,242,86,200,123,33,111,134,188,27,90,169,237,110,106,191,171,173,145,247,70,222,28,121,119,228,237,145,247,71,139,62,0,84,108,40,54,20,27,138,77,197,166,98,83,177,169,216,84,236,84,101,237,195,150,109,112,9,183,240,8,175,16,31,237,141,55,155,227,25,41,86,206,193,18,178,180,132,22,157,208,130,195,174,18,188,194,39,12,161,162,150,162,150,162,182,162,88,65,55,122,3,241,207,19,194,241,63,90,150,143,22,226,163,85,119,90,246,39,28,159,131,120,64,206,236,201,28,60,66,157,63,62,47,79,177,109,86,225,65,120,166,29,23,46,161,98,175,98,175,98,117,151,237,187,92,197,94,197,178,62,31,118,16,224,17,94,225,19,134,48,133,37,148,191,50,57,202,228,40,147,163,76,142,50,57,202,228,40,147,163,76,142,50,57,202,228,40,19,102,162,171,198,244,170,51,157,117,78,62,87,25,94,101,120,149,225,85,134,124,148,24,148,63,123,7,112,11,125,230,10,159,48,132,68,189,252,132,242,73,249,20,204,175,241,9,229,19,254,221,37,36,42,105,182,6,143,16,159,84,213,146,46,100,80,231,95,8,97,67,171,215,157,152,27,48,117,91,51,91,209,36,60,150,23,240,9,125,38,133,37,108,112,20,11,46,225,22,30,161,98,143,98,143,98,143,98,143,98,143,98,159,206,63,157,127,58,255,116,62,196,25,226,12,113,134,56,67,156,33,206,80,108,40,54,20,27,138,77,197,178,222,191,171,123,169,5,9,180,58,51,36,107,106,48,235,128,71,120,133,79,200,210,174,158,167,212,244,148,186,158,90,223,18,110,97,9,117,126,125,66,93,125,186,250,142,240,10,91,29,132,122,134,173,69,158,145,153,85,94,203,60,29,88,179,1,4,151,112,11,229,211,234,12,90,77,66,43,182,213,33,180,91,4,247,8,106,18,200,109,80,189,194,211,249,208,121,70,175,249,158,9,110,225,17,94,97,10,97,171,50,18,91,202,167,169,242,96,9,57,223,71,231,169,242,224,17,94,225,19,134,80,81,71,81,71,81,106,69,104,81,7,89,131,63,250,246,193,212,121,190,5,127,52,171,160,124,212,176,184,99,113,203,226,158,229,83,19,68,187,10,42,138,110,224,91,250,189,126,191,143,48,132,110,154,220,53,113,230,176,4,126,71,119,60,186,227,209,29,143,238,120,116,71,53,43,159,186,149,79,237,202,167,134,226,99,49,28,12,253,102,141,253,248,84,56,72,171,242,205,107,32,60,194,43,124,194,16,218,7,182,183,228,185,228,185,228,185,228,169,145,73,93,77,93,77,93,77,93,205,223,213,20,150,144,231,74,53,129,169,46,48,213,6,166,90,64,90,86,240,9,125,70,125,31,93,201,71,183,74,211,167,38,240,202,243,202,243,202,231,202,231,233,170,122,63,190,76,13,50,242,75,35,191,52,242,139,189,194,204,41,140,207,226,237,0,125,134,6,114,145,195,32,103,212,17,174,77,183,53,184,132,91,168,171,100,62,248,132,33,148,255,145,167,120,152,153,7,105,163,214,81,131,122,212,161,30,250,167,193,20,150,80,158,202,156,175,192,169,207,192,169,239,192,169,207,191,169,239,191,169,15,192,169,47,192,169,175,191,169,207,191,169,239,191,169,15,192,169,47,192,185,233,16,82,159,103,82,223,103,82,31,104,82,95,104,82,159,104,64,90,95,222,59,112,9,21,21,138,10,69,133,162,196,169,17,222,26,225,93,226,47,241,151,248,75,252,37,254,122,246,47,33,189,117,233,46,165,187,148,238,82,186,75,233,46,165,187,240,13,20,84,108,40,54,20,155,138,77,197,166,252,83,254,41,255,148,127,202,63,229,95,242,47,221,165,116,151,146,255,172,14,51,47,140,98,193,35,188,194,39,212,213,52,166,176,132,13,14,39,184,132,195,112,217,109,130,33,76,33,93,211,225,159,44,50,244,74,205,142,93,230,216,92,155,39,163,150,174,215,179,203,115,192,179,231,179,103,248,175,248,253,229,56,181,106,99,210,166,108,90,38,205,153,142,75,199,165,227,210,113,233,184,116,156,254,87,210,236,250,101,150,205,182,17,203,81,203,56,230,247,23,77,157,52,45,243,108,194,38,109,202,166,101,120,204,45,129,203,108,155,99,99,150,103,150,103,150,103,150,103,150,103,150,48,75,152,37,204,18,102,249,165,20,102,9,179,132,89,194,44,97,150,52,75,154,37,205,146,102,73,179,164,89,210,44,105,150,52,75,154,165,204,82,102,41,179,148,89,202,44,101,150,50,75,153,165,204,82,102,105,179,180,89,218,44,109,150,54,75,155,165,205,210,102,105,177,176,199,145,185,54,207,38,108,210,230,231,169,251,177,227,145,89,54,219,198,44,203,44,203,44,203,44,203,44,203,44,203,44,219,44,219,44,219,44,219,44,219,44,219,44,219,44,219,44,219,44,219,44,199,44,199,44,199,44,199,44,199,44,199,44,199,44,199,44,199,44,199,44,215,44,215,44,215,44,215,44,214,231,181,62,175,245,121,173,207,107,125,94,235,243,90,159,215,250,188,214,231,181,206,174,85,192,167,245,49,124,92,151,89,54,219,230,216,60,155,176,73,155,178,113,184,11,240,92,128,231,2,60,23,224,185,0,207,5,120,46,192,115,1,158,11,240,84,0,77,111,50,203,102,219,28,155,107,243,108,194,166,108,28,222,14,111,135,183,195,219,225,237,240,118,120,59,92,170,27,99,22,141,196,110,141,196,152,101,179,109,142,205,181,73,155,178,113,220,114,220,114,220,114,220,114,156,158,93,19,177,140,227,252,208,189,29,183,29,39,213,189,37,105,188,37,105,188,37,105,188,37,105,204,112,126,54,203,70,1,251,253,204,177,185,54,207,38,108,210,102,230,126,118,216,97,147,54,191,147,45,51,119,144,89,54,219,230,216,92,155,103,99,150,107,150,107,150,107,150,103,150,103,150,103,150,103,150,103,150,103,150,103,150,103,150,95,130,207,44,97,150,48,75,152,37,204,18,102,9,179,132,89,194,44,97,150,48,75,154,37,205,146,102,73,179,164,89,210,44,105,150,52,75,154,37,205,82,102,41,179,148,89,202,44,101,150,50,75,153,165,204,82,102,41,179,180,89,218,44,109,150,54,75,155,165,205,210,102,105,179,180,89,90,44,241,125,54,203,102,219,28,155,107,243,108,194,38,109,202,198,44,203,44,203,44,203,44,203,44,203,44,203,44,203,44,203,44,203,44,203,44,219,44,219,44,219,44,219,44,219,44,219,44,219,44,219,44,219,44,219,44,199,44,71,44,233,186,103,252,254,218,54,199,230,218,60,155,176,73,155,178,17,103,186,238,233,186,167,235,158,174,123,186,238,233,186,167,235,158,174,123,186,238,233,186,167,235,158,174,123,186,238,233,186,167,235,158,174,123,186,238,233,186,167,235,158,174,123,186,238,233,186,167,235,158,174,123,186,238,233,186,167,235,158,174,123,186,238,233,186,151,235,94,174,123,185,238,229,186,151,235,94,174,123,185,238,229,186,151,235,94,174,123,185,238,229,186,151,235,94,174,123,185,238,229,186,151,235,94,174,123,185,238,229,186,151,235,94,174,123,185,238,229,186,151,235,94,174,123,185,238,229,186,151,235,94,174,123,185,238,229,186,179,93,146,49,203,49,203,49,139,231,172,242,156,85,158,179,202,115,86,121,206,42,207,89,229,57,171,60,103,149,231,172,242,156,85,158,179,202,115,86,121,206,42,207,89,229,57,171,60,103,149,231,172,242,156,85,158,179,202,115,86,121,206,42,207,89,229,57,171,60,103,149,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,221,253,223,255,3,239,105,90,51,41,0,0])))