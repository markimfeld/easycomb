$(document).ready(() => {

    const btnCalcular = $('#btnCalcular');
    const COMBO_PRICE = 180;

    combos = [
        {
            'type': 1,
            'price': 180.0,
            'products': [
                {
                    'name': 'Pascualina',
                    'quantity': 1
                },
                {
                    'name': 'Raviol',
                    'quantity': 1
                },
                {
                    'name': 'Empanadas',
                    'quantity': 2
                }
            ]
        },
        {
            'type': 2,
            'price': 180.0,
            'products': [
                {
                    'name': 'Pascualina',
                    'quantity': 1
                },
                {
                    'name': 'Empanadas',
                    'quantity': 4
                }
            ]
        },
        {
            'type': 3,
            'price': 180.0,
            'products': [
                {
                    'name': 'Pascualina',
                    'quantity': 1
                },
                {
                    'name': 'Empanadas',
                    'quantity': 2
                },
                {
                    'name': 'Fideo',
                    'quantity': 1
                }
            ]
        },
        {
            'type': 4,
            'price': 180.0,
            'products': [
                {
                    'name': 'Empanadas',
                    'quantity': 6
                }
            ]
        },
        {
            'type': 5,
            'price': 180.0,
            'products': [
                {
                    'name': 'Pascualina',
                    'quantity': 1
                },
                {
                    'name': 'Empanadas',
                    'quantity': 1
                },
                {
                    'name': 'Fideo',
                    'quantity': 2
                }
            ]
        },
        {
            'type': 6,
            'price': 180.0,
            'products': [
                {
                    'name': 'Pascualina',
                    'quantity': 2
                },
                {
                    'name': 'Empanadas',
                    'quantity': 2
                }
            ]
        },
        {
            'type': 7,
            'price': 180.0,
            'products': [
                {
                    'name': 'Raviol',
                    'quantity': 2
                },
                {
                    'name': 'Empanadas',
                    'quantity': 1
                }
            ]
        }
    ]


    let totalProducts = [];
    let resultProducts = {
        "empanadas": 0,
        "fideo": 0,
        "raviol": 0,
        "pascualina": 0
    };

    const clear = () => {
        totalProducts = [];
        resultProducts = {
            "empanadas": 0,
            "fideo": 0,
            "raviol": 0,
            "pascualina": 0
        };
    }

    const calculateUnits = (comboType, quantity) => {
        for (combo of combos) {
            if (combo.type == comboType) {
                for (p of combo.products) {
                    totalProducts.push(
                        {
                            "name": p.name,
                            "quantity": p.quantity * quantity
                        }
                    );
                }
            }
        }
    }

    const getTotalComboUnits = (comboType, quantity) => {
        if (comboType == 1) {
            calculateUnits(comboType, quantity);
        }
        if (comboType == 2) {
            calculateUnits(comboType, quantity);
        }
        if (comboType == 3) {
            calculateUnits(comboType, quantity);
        }
        if (comboType == 4) {
            calculateUnits(comboType, quantity);
        }
        if (comboType == 5) {
            calculateUnits(comboType, quantity);
        }
        if (comboType == 6) {
            calculateUnits(comboType, quantity);
        }
        if (comboType == 7) {
            calculateUnits(comboType, quantity);
        }
    }

    const toPaid = (quantity) => {
        return quantity * COMBO_PRICE;
    }


    const mergeProducts = () => {
        for (product of totalProducts) {
            if (product.name === 'Empanadas') {
                resultProducts.empanadas += product.quantity;
            }
            if (product.name === 'Fideo') {
                resultProducts.fideo += product.quantity;
            }
            if (product.name === 'Raviol') {
                resultProducts.raviol += product.quantity;
            }
            if (product.name === 'Pascualina') {
                resultProducts.pascualina += product.quantity;
            }
        }
    }

    $('#addComboForm').submit(function (event) {
        event.preventDefault();
        let type = $('#typeCombos').val();
        let quantity = $('#quantityCombos').val();

        getTotalComboUnits(type, quantity);

        $('#tbody').append(`
        <tr>
            <td>${type}</td>
            <td>${quantity}</td>
        </tr>
        `);

        $('#typeCombos').val('');
        $('#quantityCombos').val('');

        $('#resultContainer').removeClass("d-block");
        $('#previewContainer').addClass("d-block");

    })

    btnCalcular.click(() => {
        $('#previewContainer').removeClass("d-block");
        $('#tbody').empty();
        $('#resultTableBody').empty();
        $('#resultContainer').addClass("d-block");

        mergeProducts();

        $('#resultTableBody').append(`
            <tr>
                <td>${resultProducts.empanadas}</td>
                <td>${resultProducts.fideo}</td>
                <td>${resultProducts.raviol}</td>
                <td>${resultProducts.pascualina}</td>
            </tr>
        `)

        clear();
    })

    $('#totalComboForm').submit(function (event) {
        event.preventDefault();
        let quantityCombo = $('#cantidadCombos').val();
        let amountToPaid = toPaid(quantityCombo);
        $('#resultAmountToPaid').empty();
        $('#resultAmountToPaid').append(`Total: $ ${amountToPaid}`)
    });


})


