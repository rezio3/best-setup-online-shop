export const getSpecInfoToHotDealsProducts = (singleProduct) => {
	const specification = {};
	if (singleProduct.details.type === "display") {
		specification.specification1span = "Resolution: ";
		specification.spec1info = singleProduct.details.resolution;
		specification.specification2span = "Refresh rate: ";
		specification.spec2info = singleProduct.details.fps;
		specification.specification3span = "Size: ";
		specification.spec3info = singleProduct.details.size;
		return specification;
	} else if (singleProduct.details.type === "pc") {
		specification.specification1span = "CPU: ";
		specification.spec1info = singleProduct.details.cpu;
		specification.specification2span = "RAM: ";
		specification.spec2info = singleProduct.details.ram;
		specification.specification3span = "Memory: ";
		specification.spec3info = singleProduct.details.memory;
		specification.specification4span = "GPU: ";
		specification.spec4info = singleProduct.details.gpu;
		return specification;
	} else if (singleProduct.type === "sounds") {
		specification.specification1span = "Set: ";
		specification.spec1info = singleProduct.details.set;
		specification.specification2span = "Frequency: ";
		specification.spec2info = "20hz - 20khz";
		specification.specification3span = `Total Watt (RMS): `;
		specification.spec3info = "45w";
		return specification;
	} else if (singleProduct.details.type === "chair") {
		specification.specification1span = "Type: ";
		specification.spec1info = singleProduct.details.type;
		specification.specification2span = "Size: ";
		specification.spec2info = singleProduct.details.size;
		specification.specification3span = "Color: ";
		specification.spec3info = singleProduct.details.color;
		return specification;
	} else if (singleProduct.type === "accessories") {
		specification.specification1span = "Type: ";
		specification.spec1info = singleProduct.details.type;
		specification.specification2span = "Wireless: ";
		specification.spec2info = singleProduct.details.wireless;
		specification.specification3span = "RGB: ";
		specification.spec3info = singleProduct.details.rgb;
		return specification;
	}
};
