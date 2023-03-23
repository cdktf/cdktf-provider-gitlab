// https://www.terraform.io/docs/providers/gitlab/d/metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabMetadataConfig extends cdktf.TerraformMetaArguments {
}
export interface DataGitlabMetadataKas {
}

export function dataGitlabMetadataKasToTerraform(struct?: DataGitlabMetadataKas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGitlabMetadataKasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabMetadataKas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabMetadataKas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // external_url - computed: true, optional: false, required: false
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/metadata gitlab_metadata}
*/
export class DataGitlabMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_metadata";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/d/metadata gitlab_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabMetadataConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGitlabMetadataConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab_metadata',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '15.10.0',
        providerVersionConstraint: '~> 15.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enterprise - computed: true, optional: false, required: false
  public get enterprise() {
    return this.getBooleanAttribute('enterprise');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kas - computed: true, optional: false, required: false
  private _kas = new DataGitlabMetadataKasOutputReference(this, "kas");
  public get kas() {
    return this._kas;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
