/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_compliance_frameworks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectComplianceFrameworksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Globally unique IDs of the compliance frameworks to assign to the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_compliance_frameworks#compliance_framework_ids ProjectComplianceFrameworks#compliance_framework_ids}
  */
  readonly complianceFrameworkIds: string[];
  /**
  * The ID or full path of the project to change the compliance frameworks of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_compliance_frameworks#project ProjectComplianceFrameworks#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_compliance_frameworks gitlab_project_compliance_frameworks}
*/
export class ProjectComplianceFrameworks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_compliance_frameworks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectComplianceFrameworks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectComplianceFrameworks to import
  * @param importFromId The id of the existing ProjectComplianceFrameworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_compliance_frameworks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectComplianceFrameworks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_compliance_frameworks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_compliance_frameworks gitlab_project_compliance_frameworks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectComplianceFrameworksConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectComplianceFrameworksConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_compliance_frameworks',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.3.0',
        providerVersionConstraint: '~> 18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._complianceFrameworkIds = config.complianceFrameworkIds;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compliance_framework_ids - computed: false, optional: false, required: true
  private _complianceFrameworkIds?: string[]; 
  public get complianceFrameworkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('compliance_framework_ids'));
  }
  public set complianceFrameworkIds(value: string[]) {
    this._complianceFrameworkIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceFrameworkIdsInput() {
    return this._complianceFrameworkIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compliance_framework_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._complianceFrameworkIds),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compliance_framework_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._complianceFrameworkIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
