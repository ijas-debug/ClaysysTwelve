using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsLoginValidation
{
    public partial class Main : Form
    {
        public Main()
        {
            InitializeComponent();
        }

        SqlConnection con = new SqlConnection(@"Data Source=LAPTOP-CJ6SAAMH\SQLEXPRESS;Initial Catalog=UIPATH;User ID=sa;Password=ijas10");
        public int EmployeeID;

        private void Main_Load(object sender, EventArgs e)
        {
            GetEmployeeRecord();
        }

        private void GetEmployeeRecord()
        {
            SqlCommand cmd = new SqlCommand("Select * From EmployeeTab", con);
            DataTable dt = new DataTable();
            try
            {
                con.Open();

                using (SqlDataReader sdr = cmd.ExecuteReader())
                {
                    dt.Load(sdr);
                }
            }
            catch (Exception ex)
            {
                // Handle the exception or display an error message
                MessageBox.Show("An error occurred while retrieving data: " + ex.Message);
            }
            finally
            {
                con.Close();
            }



            EmployeeRecordDataGridView.DataSource = dt;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (IsValid())
            {
                SqlCommand cmd = new SqlCommand("INSERT INTO EmployeeTab VALUES (@Name, @Department, @Salary, @Address, @Mobile)", con);

                cmd.CommandType = CommandType.Text;
                cmd.Parameters.AddWithValue("@name", txtName.Text);
                cmd.Parameters.AddWithValue("@Department", txtDepartment.Text);
                cmd.Parameters.AddWithValue("@Salary", txtSalary.Text);
                cmd.Parameters.AddWithValue("@Address", txtAddress.Text);
                cmd.Parameters.AddWithValue("@Mobile", txtMobile.Text);

                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();

                MessageBox.Show("New Employee is succesfully saved in the database", "Saved", MessageBoxButtons.OK, MessageBoxIcon.Information);

                GetEmployeeRecord();
                ResetFormControls();
            }
        }
            private bool IsValid()
            {
                if (txtName.Text == string.Empty)
                {
                    MessageBox.Show("Student Name is required", "Failed", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return false;
                }
                return true;
            }
        

        private void button4_Click(object sender, EventArgs e)
        {
            ResetFormControls();
        }
        private void ResetFormControls()
        {
            EmployeeID = 0;
            txtName.Clear();
            txtDepartment.Clear();
            txtSalary.Clear();
            txtAddress.Clear();
            txtMobile.Clear();

            txtName.Focus();
        }

        private void EmployeeRecordDataGridView_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            EmployeeID = Convert.ToInt32(EmployeeRecordDataGridView.SelectedRows[0].Cells[0].Value);
            txtName.Text = EmployeeRecordDataGridView.SelectedRows[0].Cells[1].Value.ToString();
            txtDepartment.Text = EmployeeRecordDataGridView.SelectedRows[0].Cells[2].Value.ToString();
            txtSalary.Text = EmployeeRecordDataGridView.SelectedRows[0].Cells[3].Value.ToString();
            txtAddress.Text = EmployeeRecordDataGridView.SelectedRows[0].Cells[4].Value.ToString();
            txtMobile.Text = EmployeeRecordDataGridView.SelectedRows[0].Cells[5].Value.ToString();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (EmployeeID > 0)
            {
                SqlCommand cmd = new SqlCommand("UPDATE EmployeeTab SET Name = @Name, Department = @Department, Salary = @Salary, Address = @Address, Mobile = @Mobile WHERE EmployeeID = @ID", con);


                cmd.CommandType = CommandType.Text;
                cmd.Parameters.AddWithValue("@name", txtName.Text);
                cmd.Parameters.AddWithValue("@Department", txtDepartment.Text);
                cmd.Parameters.AddWithValue("@Salary", txtSalary.Text);
                cmd.Parameters.AddWithValue("@Address", txtAddress.Text);
                cmd.Parameters.AddWithValue("@Mobile", txtMobile.Text);
                cmd.Parameters.AddWithValue("@ID", this.EmployeeID);

                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();

                MessageBox.Show("Employee information is updated successfully", "Updated", MessageBoxButtons.OK, MessageBoxIcon.Information);

                GetEmployeeRecord();
                ResetFormControls();

            }
            else
            {
                MessageBox.Show("Please select an employee to update", "Updated", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (EmployeeID > 0)
            {
                SqlCommand cmd = new SqlCommand("DELETE FROM EmployeeTab WHERE EmployeeID = @ID", con);


                cmd.CommandType = CommandType.Text;

                cmd.Parameters.AddWithValue("@ID", this.EmployeeID);

                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();

                MessageBox.Show("Employee is Deleted successfully", "Deleted", MessageBoxButtons.OK, MessageBoxIcon.Information);

                GetEmployeeRecord();
                ResetFormControls();
            }
            else
            {
                MessageBox.Show("Please select an employee to delete information", "Updated", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }
}
