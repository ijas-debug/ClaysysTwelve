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
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnExit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection(@"Data Source=LAPTOP-CJ6SAAMH\SQLEXPRESS;Initial Catalog=UIPATH;User ID=sa;Password=ijas10");
            SqlDataAdapter sda = new SqlDataAdapter("Select * From User1 where Username='" + txtUsername.Text + "' and Password ='" + txtPassword.Text + "'", con);
            DataTable dt = new DataTable();
            sda.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                // Rows exist in the DataTable
                if (dt.Rows[0][0].ToString() == "1")
                {
                    // Login successful
                    this.Hide();
                    Main ss = new Main();
                    ss.Show();
                }
                else
                {
                    // Invalid username or password
                    MessageBox.Show("Please check your username and password");
                }
            }
            else
            {
                // No rows returned by the query
                MessageBox.Show("User not found");
            }


        }
    }
    }
