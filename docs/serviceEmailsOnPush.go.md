# `gitlab_service_emails_on_push`

Refer to the Terraform Registory for docs: [`gitlab_service_emails_on_push`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/service_emails_on_push).

# `serviceEmailsOnPush` Submodule <a name="`serviceEmailsOnPush` Submodule" id="@cdktf/provider-gitlab.serviceEmailsOnPush"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceEmailsOnPush <a name="ServiceEmailsOnPush" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/service_emails_on_push gitlab_service_emails_on_push}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/serviceemailsonpush"

serviceemailsonpush.NewServiceEmailsOnPush(scope Construct, id *string, config ServiceEmailsOnPushConfig) ServiceEmailsOnPush
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig">ServiceEmailsOnPushConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig">ServiceEmailsOnPushConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetDisableDiffs">ResetDisableDiffs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetSendFromCommitterEmail">ResetSendFromCommitterEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetBranchesToBeNotified"></a>

```go
func ResetBranchesToBeNotified()
```

##### `ResetDisableDiffs` <a name="ResetDisableDiffs" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetDisableDiffs"></a>

```go
func ResetDisableDiffs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetId"></a>

```go
func ResetId()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetPushEvents"></a>

```go
func ResetPushEvents()
```

##### `ResetSendFromCommitterEmail` <a name="ResetSendFromCommitterEmail" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetSendFromCommitterEmail"></a>

```go
func ResetSendFromCommitterEmail()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetTagPushEvents"></a>

```go
func ResetTagPushEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/serviceemailsonpush"

serviceemailsonpush.ServiceEmailsOnPush_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/serviceemailsonpush"

serviceemailsonpush.ServiceEmailsOnPush_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/serviceemailsonpush"

serviceemailsonpush.ServiceEmailsOnPush_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.slug">Slug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.disableDiffsInput">DisableDiffsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.pushEventsInput">PushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.recipientsInput">RecipientsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.sendFromCommitterEmailInput">SendFromCommitterEmailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.disableDiffs">DisableDiffs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.recipients">Recipients</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.sendFromCommitterEmail">SendFromCommitterEmail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.slug"></a>

```go
func Slug() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.branchesToBeNotifiedInput"></a>

```go
func BranchesToBeNotifiedInput() *string
```

- *Type:* *string

---

##### `DisableDiffsInput`<sup>Optional</sup> <a name="DisableDiffsInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.disableDiffsInput"></a>

```go
func DisableDiffsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.pushEventsInput"></a>

```go
func PushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.recipientsInput"></a>

```go
func RecipientsInput() *string
```

- *Type:* *string

---

##### `SendFromCommitterEmailInput`<sup>Optional</sup> <a name="SendFromCommitterEmailInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.sendFromCommitterEmailInput"></a>

```go
func SendFromCommitterEmailInput() interface{}
```

- *Type:* interface{}

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tagPushEventsInput"></a>

```go
func TagPushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.branchesToBeNotified"></a>

```go
func BranchesToBeNotified() *string
```

- *Type:* *string

---

##### `DisableDiffs`<sup>Required</sup> <a name="DisableDiffs" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.disableDiffs"></a>

```go
func DisableDiffs() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.pushEvents"></a>

```go
func PushEvents() interface{}
```

- *Type:* interface{}

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.recipients"></a>

```go
func Recipients() *string
```

- *Type:* *string

---

##### `SendFromCommitterEmail`<sup>Required</sup> <a name="SendFromCommitterEmail" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.sendFromCommitterEmail"></a>

```go
func SendFromCommitterEmail() interface{}
```

- *Type:* interface{}

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tagPushEvents"></a>

```go
func TagPushEvents() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceEmailsOnPushConfig <a name="ServiceEmailsOnPushConfig" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/serviceemailsonpush"

&serviceemailsonpush.ServiceEmailsOnPushConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	Recipients: *string,
	BranchesToBeNotified: *string,
	DisableDiffs: interface{},
	Id: *string,
	PushEvents: interface{},
	SendFromCommitterEmail: interface{},
	TagPushEvents: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.project">Project</a></code> | <code>*string</code> | ID or full-path of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.recipients">Recipients</a></code> | <code>*string</code> | Emails separated by whitespace. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>*string</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.disableDiffs">DisableDiffs</a></code> | <code>interface{}</code> | Disable code diffs. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/service_emails_on_push#id ServiceEmailsOnPush#id}. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.sendFromCommitterEmail">SendFromCommitterEmail</a></code> | <code>interface{}</code> | Send from committer. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | Enable notifications for tag push events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

ID or full-path of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/service_emails_on_push#project ServiceEmailsOnPush#project}

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.recipients"></a>

```go
Recipients *string
```

- *Type:* *string

Emails separated by whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/service_emails_on_push#recipients ServiceEmailsOnPush#recipients}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.branchesToBeNotified"></a>

```go
BranchesToBeNotified *string
```

- *Type:* *string

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/service_emails_on_push#branches_to_be_notified ServiceEmailsOnPush#branches_to_be_notified}

---

##### `DisableDiffs`<sup>Optional</sup> <a name="DisableDiffs" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.disableDiffs"></a>

```go
DisableDiffs interface{}
```

- *Type:* interface{}

Disable code diffs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/service_emails_on_push#disable_diffs ServiceEmailsOnPush#disable_diffs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/service_emails_on_push#id ServiceEmailsOnPush#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.pushEvents"></a>

```go
PushEvents interface{}
```

- *Type:* interface{}

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/service_emails_on_push#push_events ServiceEmailsOnPush#push_events}

---

##### `SendFromCommitterEmail`<sup>Optional</sup> <a name="SendFromCommitterEmail" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.sendFromCommitterEmail"></a>

```go
SendFromCommitterEmail interface{}
```

- *Type:* interface{}

Send from committer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/service_emails_on_push#send_from_committer_email ServiceEmailsOnPush#send_from_committer_email}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.tagPushEvents"></a>

```go
TagPushEvents interface{}
```

- *Type:* interface{}

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/service_emails_on_push#tag_push_events ServiceEmailsOnPush#tag_push_events}

---



