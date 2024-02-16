// https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/group_project_file_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupProjectFileTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the project that will be used for file templates. This project must be the direct
  * 				child of the project defined by the group_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/group_project_file_template#file_template_project_id GroupProjectFileTemplate#file_template_project_id}
  */
  readonly fileTemplateProjectId: number;
  /**
  * The ID of the group that will use the file template project. This group must be the direct
  *                 parent of the project defined by project_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/group_project_file_template#group_id GroupProjectFileTemplate#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/group_project_file_template#id GroupProjectFileTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/group_project_file_template gitlab_group_project_file_template}
*/
export class GroupProjectFileTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_project_file_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupProjectFileTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupProjectFileTemplate to import
  * @param importFromId The id of the existing GroupProjectFileTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/group_project_file_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupProjectFileTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_project_file_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/group_project_file_template gitlab_group_project_file_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupProjectFileTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: GroupProjectFileTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_project_file_template',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.9.1',
        providerVersionConstraint: '~> 16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fileTemplateProjectId = config.fileTemplateProjectId;
    this._groupId = config.groupId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_template_project_id - computed: false, optional: false, required: true
  private _fileTemplateProjectId?: number; 
  public get fileTemplateProjectId() {
    return this.getNumberAttribute('file_template_project_id');
  }
  public set fileTemplateProjectId(value: number) {
    this._fileTemplateProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTemplateProjectIdInput() {
    return this._fileTemplateProjectId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_template_project_id: cdktf.numberToTerraform(this._fileTemplateProjectId),
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_template_project_id: {
        value: cdktf.numberToHclTerraform(this._fileTemplateProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
