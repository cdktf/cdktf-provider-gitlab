# `dataGitlabGroupBillableMemberMemberships` Submodule <a name="`dataGitlabGroupBillableMemberMemberships` Submodule" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabGroupBillableMemberMemberships <a name="DataGitlabGroupBillableMemberMemberships" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_billable_member_memberships gitlab_group_billable_member_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer"></a>

```typescript
import { dataGitlabGroupBillableMemberMemberships } from '@cdktf/provider-gitlab'

new dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships(scope: Construct, id: string, config: DataGitlabGroupBillableMemberMembershipsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig">DataGitlabGroupBillableMemberMembershipsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig">DataGitlabGroupBillableMemberMembershipsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabGroupBillableMemberMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isConstruct"></a>

```typescript
import { dataGitlabGroupBillableMemberMemberships } from '@cdktf/provider-gitlab'

dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformElement"></a>

```typescript
import { dataGitlabGroupBillableMemberMemberships } from '@cdktf/provider-gitlab'

dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformDataSource"></a>

```typescript
import { dataGitlabGroupBillableMemberMemberships } from '@cdktf/provider-gitlab'

dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport"></a>

```typescript
import { dataGitlabGroupBillableMemberMemberships } from '@cdktf/provider-gitlab'

dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabGroupBillableMemberMemberships resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabGroupBillableMemberMemberships to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabGroupBillableMemberMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_billable_member_memberships#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabGroupBillableMemberMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.memberships">memberships</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList">DataGitlabGroupBillableMemberMembershipsMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.userIdInput">userIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.userId">userId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberships`<sup>Required</sup> <a name="memberships" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.memberships"></a>

```typescript
public readonly memberships: DataGitlabGroupBillableMemberMembershipsMembershipsList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList">DataGitlabGroupBillableMemberMembershipsMembershipsList</a>

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.userIdInput"></a>

```typescript
public readonly userIdInput: number;
```

- *Type:* number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabGroupBillableMemberMembershipsConfig <a name="DataGitlabGroupBillableMemberMembershipsConfig" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.Initializer"></a>

```typescript
import { dataGitlabGroupBillableMemberMemberships } from '@cdktf/provider-gitlab'

const dataGitlabGroupBillableMemberMembershipsConfig: dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.groupId">groupId</a></code> | <code>string</code> | The ID of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.userId">userId</a></code> | <code>number</code> | The ID of the user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_billable_member_memberships#group_id DataGitlabGroupBillableMemberMemberships#group_id}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

The ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_billable_member_memberships#user_id DataGitlabGroupBillableMemberMemberships#user_id}

---

### DataGitlabGroupBillableMemberMembershipsMemberships <a name="DataGitlabGroupBillableMemberMembershipsMemberships" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMemberships.Initializer"></a>

```typescript
import { dataGitlabGroupBillableMemberMemberships } from '@cdktf/provider-gitlab'

const dataGitlabGroupBillableMemberMembershipsMemberships: dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMemberships = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabGroupBillableMemberMembershipsMembershipsList <a name="DataGitlabGroupBillableMemberMembershipsMembershipsList" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer"></a>

```typescript
import { dataGitlabGroupBillableMemberMemberships } from '@cdktf/provider-gitlab'

new dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.get"></a>

```typescript
public get(index: number): DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference <a name="DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer"></a>

```typescript
import { dataGitlabGroupBillableMemberMemberships } from '@cdktf/provider-gitlab'

new dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.sourceFullName">sourceFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.sourceMembersUrl">sourceMembersUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMemberships">DataGitlabGroupBillableMemberMembershipsMemberships</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `sourceFullName`<sup>Required</sup> <a name="sourceFullName" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.sourceFullName"></a>

```typescript
public readonly sourceFullName: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `sourceMembersUrl`<sup>Required</sup> <a name="sourceMembersUrl" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.sourceMembersUrl"></a>

```typescript
public readonly sourceMembersUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabGroupBillableMemberMembershipsMemberships;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMemberships">DataGitlabGroupBillableMemberMembershipsMemberships</a>

---



