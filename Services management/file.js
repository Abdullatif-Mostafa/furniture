
const services = [
    { id: 1, name: 'خدمات نقل العفش والاثاث ', description: 'سيارات مجهزة لنقل الغقش والاثاث مع افضل الفيين المتخصصين بالفك والتركيب والتغليف', category: 'category1' },
    { id: 2, name: '  خدمات تخزين العفش', description: 'مستودعات لتخزين العفش والاثاث مجهزة بالكامل للحفاظ علي مقتنياتك ومؤمنه تماما', category: 'category2' },
];

const serviceList = document.getElementById('serviceList');// الخدمات المتاحه
const addServiceForm = document.getElementById('addServiceForm'); // اضافه خدمه
const editServiceModal = document.getElementById('editServiceModal'); // تعديل نموذج الخدمه
const editServiceForm = document.getElementById('editServiceForm');// 

// Function to display services in the list
function displayServices() {
    serviceList.innerHTML = ''; // Clear the list
    services.forEach(service => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <div class="services">
            <span >${service.name}</span>
            <div>
                <button class="edit-button my-2" onclick="openEditModal(${service.id})">تعديل</button>
                <button class="delete-button" onclick="openDeleteModal(${service.id})">حذف</button>
            <div>
        </div>
        `;
        serviceList.appendChild(listItem);
    });
}

// Function to open the edit modal and populate the form with service data
function openEditModal(serviceId) {
    const selectedService = services.find(service => service.id === serviceId);

    if (selectedService) {
        document.getElementById('editServiceName').value = selectedService.name;
        document.getElementById('editServiceDescription').value = selectedService.description;
        document.getElementById('editServiceCategory').value = selectedService.category;

        editServiceModal.style.display = 'block';
    }
}

// Function to close the edit modal
function closeEditModal() {
    editServiceModal.style.display = 'none';
}

// Event listener for adding a new service
addServiceForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const newService = {
        id: services.length + 1,
        name: addServiceForm.serviceName.value,
        description: addServiceForm.serviceDescription.value,
        category: addServiceForm.serviceCategory.value,
    };

    services.push(newService);
    displayServices();

    // Clear the form
    addServiceForm.reset();
});

// Event listener for editing a service
editServiceForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const editedService = {
        name: editServiceForm.editServiceName.value,
        description: editServiceForm.editServiceDescription.value,
        category: editServiceForm.editServiceCategory.value,
    };

    // Update the service in the array (considering you have an ID property)
    const selectedServiceId = 1; // Assuming you have a way to get the selected service ID
    const selectedServiceIndex = services.findIndex(service => service.id === selectedServiceId);

    if (selectedServiceIndex !== -1) {
        services[selectedServiceIndex] = { ...services[selectedServiceIndex], ...editedService };
        displayServices();
        closeEditModal();
    }
});
// فتح نموذج حذف الخدمة
function openDeleteModal(serviceId) {
    selectedServiceId = serviceId;
    deleteServiceModal.style.display = 'block';
}
// تأكيد حذف الخدمة
function confirmDeleteService() {
    // حذف الخدمة من المصفوفة (يجب تحسين هذا للعمل مع خادم حقيقي أو قاعدة بيانات)
    const selectedServiceIndex = services.findIndex(service => service.id === selectedServiceId);
    if (selectedServiceIndex !== -1) {
        services.splice(selectedServiceIndex, 1);
        displayServices();
        cancelDeleteService();
    }
}
// إلغاء حذف الخدمة
function cancelDeleteService() {
    deleteServiceModal.style.display = 'none';
    selectedServiceId = null;
}
// Initial display of services
displayServices();