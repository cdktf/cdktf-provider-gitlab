// https://www.terraform.io/docs/providers/gitlab/r/group_project_file_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupProjectFileTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the project that will be used for file templates. This project must be the direct
				child of the project defined by the group_id
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_project_file_template#file_template_project_id GroupProjectFileTemplate#file_template_project_id}
  */
  readonly fileTemplateProjectId: number;
  /**
  * The ID of the group that will use the file template project. This group must be the direct
                parent of the project defined by project_id
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_project_file_template#group_id GroupProjectFileTemplate#group_id}
  */
  readonly groupId: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/group_project_file_template gitlab_group_project_file_template}
*/
export class GroupProjectFileTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_project_file_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/group_project_file_template gitlab_group_project_file_template} Resource
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
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fileTemplateProjectId = config.fileTemplateProjectId;
    this._groupId = config.groupId;
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_template_project_id: cdktf.numberToTerraform(this._fileTemplateProjectId),
      group_id: cdktf.numberToTerraform(this._groupId),
    };
  }
}
