import React from 'react';

export const FormAddBilling = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Tambah Billing</h2>
            <input type="hidden" name="pasien.id" value={props.pasien.id} />

            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" defaultValue={props.pasien.nama} readOnly/>
            </div>

            <div className="form-group">
                <label>Jumlah Tagihan</label>
                <input type="number" className="form-control" name="jumlahTagihan"/>
            </div>

            <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan"/>
            </div>

            <button className="btn btn-success" value="submit">Tambah</button>
        </form>
    )
}