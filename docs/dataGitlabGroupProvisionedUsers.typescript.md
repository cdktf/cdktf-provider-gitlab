# `dataGitlabGroupProvisionedUsers` Submodule <a name="`dataGitlabGroupProvisionedUsers` Submodule" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabGroupProvisionedUsers <a name="DataGitlabGroupProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_provisioned_users gitlab_group_provisioned_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer"></a>

```typescript
import { dataGitlabGroupProvisionedUsers } from '@cdktf/provider-gitlab'

new dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers(scope: Construct, id: string, config: DataGitlabGroupProvisionedUsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig">DataGitlabGroupProvisionedUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig">DataGitlabGroupProvisionedUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.putProvisionedUsers">putProvisionedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetBlocked">resetBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedBefore">resetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetProvisionedUsers">resetProvisionedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProvisionedUsers` <a name="putProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.putProvisionedUsers"></a>

```typescript
public putProvisionedUsers(value: IResolvable | DataGitlabGroupProvisionedUsersProvisionedUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.putProvisionedUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetBlocked` <a name="resetBlocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetBlocked"></a>

```typescript
public resetBlocked(): void
```

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedAfter"></a>

```typescript
public resetCreatedAfter(): void
```

##### `resetCreatedBefore` <a name="resetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedBefore"></a>

```typescript
public resetCreatedBefore(): void
```

##### `resetProvisionedUsers` <a name="resetProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetProvisionedUsers"></a>

```typescript
public resetProvisionedUsers(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabGroupProvisionedUsers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isConstruct"></a>

```typescript
import { dataGitlabGroupProvisionedUsers } from '@cdktf/provider-gitlab'

dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformElement"></a>

```typescript
import { dataGitlabGroupProvisionedUsers } from '@cdktf/provider-gitlab'

dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformDataSource"></a>

```typescript
import { dataGitlabGroupProvisionedUsers } from '@cdktf/provider-gitlab'

dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport"></a>

```typescript
import { dataGitlabGroupProvisionedUsers } from '@cdktf/provider-gitlab'

dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabGroupProvisionedUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabGroupProvisionedUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabGroupProvisionedUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_provisioned_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabGroupProvisionedUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsers">provisionedUsers</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList">DataGitlabGroupProvisionedUsersProvisionedUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blockedInput">blockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfterInput">createdAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBeforeInput">createdBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsersInput">provisionedUsersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blocked">blocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfter">createdAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBefore">createdBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisionedUsers`<sup>Required</sup> <a name="provisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsers"></a>

```typescript
public readonly provisionedUsers: DataGitlabGroupProvisionedUsersProvisionedUsersList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList">DataGitlabGroupProvisionedUsersProvisionedUsersList</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockedInput`<sup>Optional</sup> <a name="blockedInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blockedInput"></a>

```typescript
public readonly blockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfterInput"></a>

```typescript
public readonly createdAfterInput: string;
```

- *Type:* string

---

##### `createdBeforeInput`<sup>Optional</sup> <a name="createdBeforeInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBeforeInput"></a>

```typescript
public readonly createdBeforeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `provisionedUsersInput`<sup>Optional</sup> <a name="provisionedUsersInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsersInput"></a>

```typescript
public readonly provisionedUsersInput: IResolvable | DataGitlabGroupProvisionedUsersProvisionedUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blocked`<sup>Required</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blocked"></a>

```typescript
public readonly blocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfter"></a>

```typescript
public readonly createdAfter: string;
```

- *Type:* string

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBefore"></a>

```typescript
public readonly createdBefore: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabGroupProvisionedUsersConfig <a name="DataGitlabGroupProvisionedUsersConfig" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.Initializer"></a>

```typescript
import { dataGitlabGroupProvisionedUsers } from '@cdktf/provider-gitlab'

const dataGitlabGroupProvisionedUsersConfig: dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.id">id</a></code> | <code>string</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Return only active provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.blocked">blocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Return only blocked provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdAfter">createdAfter</a></code> | <code>string</code> | Return only provisioned users created on or after the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdBefore">createdBefore</a></code> | <code>string</code> | Return only provisioned users created on or before the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisionedUsers">provisionedUsers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]</code> | provisioned_users block. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.search">search</a></code> | <code>string</code> | The search query to filter the provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.username">username</a></code> | <code>string</code> | The username of the provisioned user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_provisioned_users#id DataGitlabGroupProvisionedUsers#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Return only active provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_provisioned_users#active DataGitlabGroupProvisionedUsers#active}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.blocked"></a>

```typescript
public readonly blocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Return only blocked provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_provisioned_users#blocked DataGitlabGroupProvisionedUsers#blocked}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdAfter"></a>

```typescript
public readonly createdAfter: string;
```

- *Type:* string

Return only provisioned users created on or after the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_provisioned_users#created_after DataGitlabGroupProvisionedUsers#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdBefore"></a>

```typescript
public readonly createdBefore: string;
```

- *Type:* string

Return only provisioned users created on or before the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_provisioned_users#created_before DataGitlabGroupProvisionedUsers#created_before}

---

##### `provisionedUsers`<sup>Optional</sup> <a name="provisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisionedUsers"></a>

```typescript
public readonly provisionedUsers: IResolvable | DataGitlabGroupProvisionedUsersProvisionedUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]

provisioned_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_provisioned_users#provisioned_users DataGitlabGroupProvisionedUsers#provisioned_users}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

The search query to filter the provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_provisioned_users#search DataGitlabGroupProvisionedUsers#search}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username of the provisioned user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/group_provisioned_users#username DataGitlabGroupProvisionedUsers#username}

---

### DataGitlabGroupProvisionedUsersProvisionedUsers <a name="DataGitlabGroupProvisionedUsersProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers.Initializer"></a>

```typescript
import { dataGitlabGroupProvisionedUsers } from '@cdktf/provider-gitlab'

const dataGitlabGroupProvisionedUsersProvisionedUsers: dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabGroupProvisionedUsersProvisionedUsersList <a name="DataGitlabGroupProvisionedUsersProvisionedUsersList" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer"></a>

```typescript
import { dataGitlabGroupProvisionedUsers } from '@cdktf/provider-gitlab'

new dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.get"></a>

```typescript
public get(index: number): DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGitlabGroupProvisionedUsersProvisionedUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]

---


### DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference <a name="DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer"></a>

```typescript
import { dataGitlabGroupProvisionedUsers } from '@cdktf/provider-gitlab'

new dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bio">bio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bot">bot</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.confirmedAt">confirmedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.external">external</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.jobTitle">jobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastActivityOn">lastActivityOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastSignInAt">lastSignInAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.linkedin">linkedin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.privateProfile">privateProfile</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.pronouns">pronouns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.publicEmail">publicEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.skype">skype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twitter">twitter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twoFactorEnabled">twoFactorEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.websiteUrl">websiteUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `bio`<sup>Required</sup> <a name="bio" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bio"></a>

```typescript
public readonly bio: string;
```

- *Type:* string

---

##### `bot`<sup>Required</sup> <a name="bot" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bot"></a>

```typescript
public readonly bot: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `confirmedAt`<sup>Required</sup> <a name="confirmedAt" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.confirmedAt"></a>

```typescript
public readonly confirmedAt: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.external"></a>

```typescript
public readonly external: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

---

##### `lastActivityOn`<sup>Required</sup> <a name="lastActivityOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastActivityOn"></a>

```typescript
public readonly lastActivityOn: string;
```

- *Type:* string

---

##### `lastSignInAt`<sup>Required</sup> <a name="lastSignInAt" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastSignInAt"></a>

```typescript
public readonly lastSignInAt: string;
```

- *Type:* string

---

##### `linkedin`<sup>Required</sup> <a name="linkedin" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.linkedin"></a>

```typescript
public readonly linkedin: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `privateProfile`<sup>Required</sup> <a name="privateProfile" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.privateProfile"></a>

```typescript
public readonly privateProfile: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `pronouns`<sup>Required</sup> <a name="pronouns" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.pronouns"></a>

```typescript
public readonly pronouns: string;
```

- *Type:* string

---

##### `publicEmail`<sup>Required</sup> <a name="publicEmail" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.publicEmail"></a>

```typescript
public readonly publicEmail: string;
```

- *Type:* string

---

##### `skype`<sup>Required</sup> <a name="skype" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.skype"></a>

```typescript
public readonly skype: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twitter"></a>

```typescript
public readonly twitter: string;
```

- *Type:* string

---

##### `twoFactorEnabled`<sup>Required</sup> <a name="twoFactorEnabled" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twoFactorEnabled"></a>

```typescript
public readonly twoFactorEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `websiteUrl`<sup>Required</sup> <a name="websiteUrl" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.websiteUrl"></a>

```typescript
public readonly websiteUrl: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGitlabGroupProvisionedUsersProvisionedUsers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>

---



